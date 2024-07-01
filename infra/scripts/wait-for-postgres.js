const { exec } = require("node:child_process");

const messageWaiting = "Esperando servidor Postgres";

const startedAt = Date.now();
function showAwaitedTime() {
  return `${((Date.now() - startedAt) / 1000).toFixed(2)}s`;
}

function showSpinner() {
  const spinnerIntervalMs = 200;
  const spinner = ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"];
  const index = Math.floor(Date.now() / spinnerIntervalMs) % spinner.length;
  return `${showAwaitedTime()} ${spinner[index]}`;
}

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(`\r⏳ ${messageWaiting} ${showSpinner()}`);
      checkPostgres();
      return;
    }
    process.stdout.write(`\r✔️  ${messageWaiting} - ${showAwaitedTime()}`);
    process.stdout.write(
      "\n✅ Servidor Postgres pronto para receber conexões\n",
    );
  }
}

process.stdout.write(`\n\n📢 ${messageWaiting}`);
checkPostgres();
