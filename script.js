let atual = 0;
let historiaFinal = "";

const perguntas = [
    {
        pergunta: "Onde você gostaria de ir?",
        opcoes: [
            {
                texto: "Para a floresta",
                afirmacao: [
                    "Você entrou em uma floresta misteriosa.",
                    "Você encontrou uma floresta cheia de árvores gigantes.",
                    "A floresta estava silenciosa e cheia de mistérios."
                ]
            },
            {
                texto: "Para a cidade",
                afirmacao: [
                    "Você chegou a uma cidade movimentada.",
                    "A cidade estava cheia de pessoas.",
                    "Você encontrou uma cidade cheia de lugares interessantes."
                ]
            }
        ]
    },
    {
        pergunta: "O que você encontrou?",
        opcoes: [
            {
                texto: "Um castelo",
                afirmacao: [
                    "Você encontrou um castelo antigo.",
                    "Um enorme castelo apareceu diante de você.",
                    "Você descobriu um castelo escondido."
                ]
            },
            {
                texto: "Uma caverna",
                afirmacao: [
                    "Você encontrou uma caverna escura.",
                    "Uma enorme caverna apareceu no caminho.",
                    "Você descobriu uma caverna misteriosa."
                ]
            }
        ]
    },
    {
        pergunta: "O que você decidiu fazer?",
        opcoes: [
            {
                texto: "Entrar",
                afirmacao: [
                    "Você decidiu entrar e descobrir o que havia lá dentro.",
                    "Com coragem, você entrou no local.",
                    "Você respirou fundo e entrou."
                ]
            },
            {
                texto: "Voltar",
                afirmacao: [
                    "Você decidiu voltar para casa.",
                    "Você preferiu seguir por outro caminho.",
                    "Você decidiu deixar aquele lugar para trás."
                ]
            }
        ]
    }
];

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    const elementoPergunta = document.getElementById("pergunta");
    const elementoOpcoes = document.getElementById("opcoes");

    elementoPergunta.textContent = perguntaAtual.pergunta;

    elementoOpcoes.innerHTML = "";

    perguntaAtual.opcoes.forEach((opcao) => {
        const botao = document.createElement("button");

        botao.textContent = opcao.texto;

        botao.addEventListener("click", function () {
            respostaSelecionada(opcao);
        });

        elementoOpcoes.appendChild(botao);
    });
}

function mostraResultado() {
    const elementoPergunta = document.getElementById("pergunta");
    const elementoOpcoes = document.getElementById("opcoes");

    elementoPergunta.textContent = "Sua história terminou!";

    elementoOpcoes.innerHTML = `
        <p>${historiaFinal}</p>
        <button onclick="reiniciar()">Jogar novamente</button>
    `;
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function reiniciar() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

mostraPergunta();
