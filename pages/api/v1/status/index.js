// Qualquer endpoint dentro da pasta api usando Next, automaticament de torna uma rota publica da api que terá uma função designada para receber requests do lado de fora e retornar uma response

export default function status(request, response) {
  response
    .status(200)
    .json({ chave: "Alunos do curso.dev são acima da média" });
}
