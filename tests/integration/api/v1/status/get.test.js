test("GET to api/v1/status should return 200", async () => {
  let response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const databaseInfo = responseBody.dependencies.database;

  expect(databaseInfo.version).toEqual("16.0");

  expect(typeof databaseInfo.max_connections).toBe("number");
  expect(databaseInfo.max_connections).toEqual(100);

  expect(typeof databaseInfo.opened_connections).toBe("number");
  expect(
    databaseInfo.opened_connections > 0 &&
      databaseInfo.opened_connections < databaseInfo.max_connections,
  ).toBeTruthy();
});
