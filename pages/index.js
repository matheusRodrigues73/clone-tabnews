import Link from "next/link";

function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-end gap-3 bg-blue-950 text-white">
        <Link href={"https://github.com/matheusRodrigues73"} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </Link>
      </div>
      <div className="bg-blue-950 grid pt-7 pb-14">
        <p className="justify-self-center text-white text-3xl">WebClassroom.</p>
      </div>
      <div className="max-w mx-auto">
        <h1 className="text-center py-3 text-4xl text-stone-500">
          Uma Nova Experiência de{" "}
          <b className="text-blue-400 py-0.5 border-b-2 border-blue-400">
            Aprender
          </b>
        </h1>
        <p className="text-lg text-justify px-2">
          Um novo pedaço de internet está sendo construído para ser um local
          onde organizar e armazenar trabalhos escolares ou acadêmicos, além de
          poder <b>disponibilizar publicamente</b> o conhecimento gerado para
          qualquer outro usuário acessar dentro da plataforma. Feito para
          Educadores, Alunos e pessoas que buscam desenvolvimento constante,
          terem um espaço reservado para consumir{" "}
          <b>conteúdos de valor concreto</b> e contribuir para o avanço da
          educação. O objetivo é aproximar as pessoas, incentivando o debate e o
          compartilhamento de ideias de forma saudável, e tornar isso uma{" "}
          <b>experiência agradável</b>.
        </p>
      </div>

      <div className="py-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="currentColor"
          className="bi bi-exclamation-triangle w-full text-center"
          viewBox="0 0 16 16"
        >
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
          <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
        </svg>
        <b className="block text-center">Building Project...</b>
      </div>
    </main>
  );
}

export default Home;
