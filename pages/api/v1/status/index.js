// Qualquer endpoint dentro da pasta api usando Next, automaticament de torna uma rota publica da api que terá uma função designada para receber requests do lado de fora e retornar uma response

import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionResponse = await database.query("SHOW server_version;");
  const serverVersion = versionResponse.rows[0].server_version;

  const maxConnectionsResponse = await database.query("SHOW max_connections;");
  const maxConnections = Number(maxConnectionsResponse.rows[0].max_connections);

  const openedConnectionsResponse = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [process.env.POSTGRES_DB],
  });
  const openedConnections = openedConnectionsResponse.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: serverVersion,
        max_connections: maxConnections,
        opened_connections: openedConnections,
      },
    },
  });
}
