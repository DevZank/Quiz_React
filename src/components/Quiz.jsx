import React, { useState } from "react";
import "./Quiz.css";
import Question from "../assets/Question.png";

const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
    resposta: "Brasília",
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    opcoes: [
      "Pedro Álvares Cabral",
      "Cristóvão Colombo",
      "Vasco da Gama",
      "Fernão de Magalhães",
    ],
    resposta: "Pedro Álvares Cabral",
  },
  {
    pergunta: "Quantos planetas existem no sistema solar?",
    opcoes: ["5", "7", "9", "8"],
    resposta: "8",
  },
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    const novasRespostas = [...respostas, respostaSelecionada];
    setRespostas(novasRespostas);

    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado(novasRespostas);
    }
  };

  const calcularResultado = (novasRespostas) => {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (novasRespostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <main>
      {resultado !== null ? (
        <div className="Acertos">
          <img src={Question} alt="Question Icon" />
          <h2>Resultado do Quiz</h2>
          <p>
            Você acertou {resultado} de {perguntas.length} perguntas!
          </p>
          <button onClick={reiniciarQuiz}>
            Reiniciar Quiz <i class="ri-loop-right-line"></i>
          </button>
        </div>
      ) : (
        <header>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <h3>{perguntas[indicePergunta].pergunta}</h3>
          <ul>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ul>
        </header>
      )}
    </main>
  );
}

export default Quiz;
