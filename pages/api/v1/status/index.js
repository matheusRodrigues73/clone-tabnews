// Qualquer endpoint dentro da pasta api usando Next, automaticament de torna uma rota publica da api que terá uma função designada para receber requests do lado de fora e retornar uma response

import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  // SHOW key-word is used to access database configuration properties

  // server_version = "16.0" postgres version
  const versionResponse = await database.query("SHOW server_version;");
  const serverVersion = versionResponse.rows[0].server_version;

  // max_connections are defined in configuration file too, thereform you can access that using SHOW key-word
  const maxConnectionsResponse = await database.query("SHOW max_connections;");
  const maxConnections = Number(maxConnectionsResponse.rows[0].max_connections);

  // opened connections are not accessible by configurations file, it depends of the situation, or better, the status of connections;
  // pg_stat is a subdirectory on postgres process and have the status informations, variable values, about the current situation of database
  // count(*) from pg_stat_activity will serve for us the opened connections, specifing the database where we have seen;

  const openedConnectionsResponse = await database.query(
    "SELECT count(*) AS opened_connections FROM pg_stat_activity WHERE datname = 'local_db';",
  );
  const openedConnections = Number(
    openedConnectionsResponse.rows[0].opened_connections,
  );

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
