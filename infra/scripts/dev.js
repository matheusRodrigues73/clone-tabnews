const { spawn } = require("node:child_process");

runCommand("npm", ["run", "start:dev"]);

process.on("SIGINT", () => {
  console.log(
    "\n👀 Ops! process has been interrupted!\n⌛ Stopping services...",
  );
  runCommand("npm", ["run", "services:stop"]).on("exit", () => {
    console.log("\n🤝 Ok it's stopped, God bless you!");
  });
});

function runCommand(command, arg) {
  return spawn(command, arg, { stdio: "inherit", shell: true });
}
