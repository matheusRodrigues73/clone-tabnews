import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe('DELETE "api/v1/migrations"', () => {
  describe("Anonymous User", () => {
    test("Running an invalid method", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "DELETE",
      });
      expect(response.status).toBe(405);
    });
  });
});
