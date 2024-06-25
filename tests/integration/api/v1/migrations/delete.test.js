import database from "infra/database.js";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("DROP SCHEMA public cascade; CREATE SCHEMA public;");
}

test("DELETE to 'api/v1/migrations' should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });
  expect(response.status).toBe(405);
});
