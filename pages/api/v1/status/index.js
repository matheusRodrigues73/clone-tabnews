// Qualquer endpoint dentro da pasta api usando Next, automaticament de torna uma rota publica da api que terá uma função designada para receber requests do lado de fora e retornar uma response

import database from "infra/database.js";

export default async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response
    .status(200)
    .json({ chave: "Alunos do curso.dev são acima da média" });
}
