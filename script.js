
const questions = [
  {
    question: "O que mais valorizas num momento íntimo?",
    answers: [
      { text: "Conexão emocional", value: "emoção" },
      { text: "Exploração do corpo", value: "físico" },
      { text: "Comunicação", value: "comunicação" },
      { text: "Carinho e toques suaves", value: "carinho" },
      { text: "Privacidade e conforto", value: "segurança" }
    ]
  },
  {
    question: "Gostarias de experimentar algo novo com o teu parceiro?",
    answers: [
      { text: "Sim, com confiança", value: "abertura" },
      { text: "Prefiro manter o que já conhecemos", value: "segurança" },
      { text: "Sim, mas lentamente", value: "cautela" },
      { text: "Depende do dia", value: "flexível" },
      { text: "Não sinto necessidade", value: "conservador" }
    ]
  }
];

let currentQuestion = 0;
let results = [];

const introEl = document.getElementById("intro");
const startBtn = document.getElementById("start-btn");
const quizEl = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

// Função que arranca o quiz ao clicar "Começar"
startBtn.addEventListener("click", () => {
  introEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    btn.onclick = () => {
      results.push(answer.value);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  quizEl.classList.add("hidden");

  const emotion = results.filter(r => r === "emoção").length;
  const fisico = results.filter(r => r === "físico").length;
  const abertura = results.filter(r => r === "abertura").length;
  const seguranca = results.filter(r => r === "segurança").length;

  let resumo = "Resumo psicológico:\n";

  if (emotion > fisico) {
    resumo += "- Valoriza ligação emocional.\n";
  } else {
    resumo += "- Dá importância à dimensão física.\n";
  }

  if (abertura > seguranca) {
    resumo += "- Está aberta a novas experiências.\n";
  } else {
    resumo += "- Prefere segurança e familiaridade.\n";
  }

  resumo += "\nObrigado pelo teu tempo e pela partilha.";

  resultEl.textContent = resumo;
  resultEl.classList.remove("hidden");
}
  }
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  quizContainer.classList.add("hidden");

  const emotion = results.filter(r => r === "emoção").length;
  const fisico = results.filter(r => r === "físico").length;
  const abertura = results.filter(r => r === "abertura").length;
  const seguranca = results.filter(r => r === "segurança").length;

  let resumo = "Resumo psicológico:

";

  resumo += emotion > fisico
    ? "- Procuras ligação emocional e afetiva.
"
    : "- O toque e o prazer físico são importantes para ti.
";

  resumo += abertura > seguranca
    ? "- Estás aberta(o) a novas experiências.
"
    : "- Preferes manter a segurança e o conhecido.
";

  resumo += "
Obrigado pelo teu tempo e pela tua entrega. Que esta partilha aprofunde ainda mais a vossa conexão.";

  resultEl.textContent = resumo;
  resultEl.classList.remove("hidden");
}
