import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let updatedAt = "Carregando";
  if ((!isLoading, data)) {
    updatedAt = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Ultima atualização: {updatedAt}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let version = "Carregando";
  let maxConnections = "Carregando";
  let openedConnections = "Carregando";
  if (!isLoading && data) {
    version = data.dependencies.database.version;
    maxConnections = data.dependencies.database.max_connections;
    openedConnections = data.dependencies.database.opened_connections;
  }
  return (
    <div>
      <h2>Banco de Dados</h2>
      <div>
        <div>Verção do Postgres: {version}</div>
        <div>Maximo de Conexões: {maxConnections}</div>
        <div>Conexões Abertas: {openedConnections}</div>
      </div>
    </div>
  );
}
