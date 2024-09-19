import retry from "async-retry";
import database from "infra/database.js";

async function waitForAllServices() {
  await waitForWebServices();

  async function waitForWebServices() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
      minTimeout: 500,
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (!response.ok) {
        throw Error();
      }
    }
  }
}
async function clearDatabase() {
  return await database.query(
    "DROP SCHEMA public cascade; CREATE SCHEMA public;",
  );
}

const orchestrator = { waitForAllServices, clearDatabase };

export default orchestrator;
