import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe('GET "api/v1/status"', () => {
  describe("Anonymous User", () => {
    test("retriving current system status", async () => {
      let response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
      expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

      const databaseInfo = responseBody.dependencies.database;

      expect(databaseInfo.version).toEqual("16.0");
      expect(databaseInfo.max_connections).toEqual(100);
      expect(databaseInfo.opened_connections).toEqual(1);
    });
  });
});
