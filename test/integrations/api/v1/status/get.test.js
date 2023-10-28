test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("https://curso.dev/web/exercicios");
  expect(response.status).toBe(200);
});
