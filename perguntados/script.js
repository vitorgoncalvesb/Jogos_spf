// salvar caegoria

function selecionarCategoria(categoria){

  localStorage.setItem("categoria", categoria);

  window.location.href = "escolhaPerguntas.html";
}

// gerar botões das perguntas

const numeros = document.getElementById("numeros");

function getPerguntasUsadas(categoria){
  const raw = localStorage.getItem(`perguntasUsadas_${categoria}`);
  try{
    const usadas = JSON.parse(raw || '[]');
    return Array.isArray(usadas) ? usadas : [];
  }catch{
    return [];
  }
}

function marcarPerguntaUsada(categoria, numero){
  const usadas = getPerguntasUsadas(categoria);
  if(!usadas.includes(numero)){
    usadas.push(numero);
    localStorage.setItem(`perguntasUsadas_${categoria}`, JSON.stringify(usadas));
  }
}

function limparPerguntasUsadas(categoria){
  localStorage.removeItem(`perguntasUsadas_${categoria}`);
}

function reiniciarPerguntas(){
  const categoria = localStorage.getItem("categoria") || 'geral';
  limparPerguntasUsadas(categoria);
  window.location.reload();
}

if(numeros){
  const categoria = localStorage.getItem("categoria") || 'geral';
  const usadas = getPerguntasUsadas(categoria);

  for(let i = 1; i <= 50; i++){
    const usada = usadas.includes(i);
    numeros.innerHTML += `
      <button class="numero-btn${usada ? ' usada' : ''}" ${usada ? 'disabled' : ''} onclick="abrirPergunta(${i})">
        ${i}
      </button>
    `;
  }
}

// abrir pergunta

function abrirPergunta(numero){
  const categoria = localStorage.getItem("categoria") || 'geral';
  marcarPerguntaUsada(categoria, numero);
  localStorage.setItem("numeroPergunta", numero);
  window.location.href = "pergunta.html";
}

// banco de perguntas

const perguntas = {

  paulo: [

    {
      pergunta:"Principal objetivo da educação, segundo Paulo Freire, é:",
      opcoes:["Decorar conteúdos","Formar mão de obra","Desenvolver consciência crítica","Ensinar regras rígidas"],
      correta:2
    },
    {
      pergunta:"O que é a educação bancária, criticada por Paulo Freire?",
      opcoes:["Ensino voltado para economia","Ensino onde o professor deposita conhecimento no aluno","Ensino com uso de tecnologia","Ensino voltado para matemática financeira"],
      correta:1
    },
    {
      pergunta:"Para Paulo Freire, o aluno deve ser:",
      opcoes:["Passivo","Apenas ouvinte","Participativo e crítico","Silencioso"],
      correta:2
    },
    {
      pergunta:"O método de ensino de Paulo Freire valoriza principalmente:",
      opcoes:["A repetição","O diálogo","A memorização","A competição"],
      correta:1
    },
    {
      pergunta:"A proposta pedagógica de Paulo Freire está ligada principalmente a qual ideia?",
      opcoes:["Educação neutra","Educação crítica e transformadora","Ensino militarizado","Ensino técnico rígido"],
      correta:1
    },
    {
      pergunta:"Para Paulo Freire, ensinar não é:",
      opcoes:["Transferir conhecimento","Criar possibilidades","Estimular o pensamento","Promover diálogo"],
      correta:0
    },
    {
      pergunta:"O aluno, no método freiriano, é visto como:",
      opcoes:["Um recipiente vazio","Um sujeito ativo","Um subordinado","Um espectador"],
      correta:1
    },
    {
      pergunta:"A relação entre professor e aluno deve ser:",
      opcoes:["Autoritária","Vertical","Dialógica","Distante"],
      correta:2
    },
    {
      pergunta:"O professor freiriano atua como:",
      opcoes:["Dono do saber","Mediador do conhecimento","Fiscal","Juiz"],
      correta:1
    },
    {
      pergunta:"O papel da escola, segundo Freire, é:",
      opcoes:["Apenas ensinar conteúdos","Formar cidadãos críticos","Aplicar provas","Controlar alunos"],
      correta:1
    },
    {
      pergunta:"Segundo Paulo Freire, a educação deve partir principalmente:",
      opcoes:["Do livro didático","Da realidade do aluno","Do currículo fixo","Das provas escolares"],
      correta:1
    },
    {
      pergunta:"O conceito de consciência crítica em Paulo Freire significa:",
      opcoes:["Decorar conteúdos rapidamente","Questionar e compreender a realidade","Obedecer sem questionar","Repetir ideias prontas"],
      correta:1
    },
    {
      pergunta:"Para Paulo Freire, o diálogo na educação serve para:",
      opcoes:["Controlar os alunos","Tornar a aula mais rápida","Construir conhecimento em conjunto","Evitar dúvidas"],
      correta:2
    },
    {
      pergunta:"A educação problematizadora, defendida por Paulo Freire, tem como objetivo:",
      opcoes:["Facilitar a memorização","Levantar questionamentos sobre a realidade","Aplicar mais provas","Ensinar conteúdos prontos"],
      correta:1
    },
    {
      pergunta:"Na visão de Paulo Freire, o erro do aluno deve ser:",
      opcoes:["Punido","Ignorado","Usado como oportunidade de aprendizado","Evitado a qualquer custo"],
      correta:2
    },
    {
      pergunta:"Para Paulo Freire, a educação está diretamente ligada à:",
      opcoes:["Neutralidade política","Transformação social","Competição entre alunos","Repetição de conteúdos"],
      correta:1
    },
    {
      pergunta:"O conhecimento, segundo Paulo Freire, é construído:",
      opcoes:["Individualmente","Pelo professor sozinho","Na interação entre pessoas","Apenas nos livros"],
      correta:2
    },
    {
      pergunta:"A prática pedagógica freiriana incentiva o aluno a:",
      opcoes:["Aceitar tudo sem questionar","Reproduzir ideias prontas","Ser protagonista do aprendizado","Permanecer em silêncio"],
      correta:2
    },
    {
      pergunta:"Para Paulo Freire, a leitura do mundo é:",
      opcoes:["Menos importante que a leitura de textos","Igual à leitura de livros","Mais importante que a escrita","Fundamental antes da leitura da palavra"],
      correta:3
    },
    {
      pergunta:"A educação libertadora proposta por Paulo Freire busca:",
      opcoes:["Manter a ordem social","Formar trabalhadores obedientes","Desenvolver autonomia e consciência","Evitar debates em sala"],
      correta:2
    },
    {
      pergunta:"A pedagogia freiriana defende:",
      opcoes:["Ensino mecânico","Participação ativa do estudante","Decoração de fórmulas","Aulas silenciosas"],
      correta:1
    },
    {
      pergunta:"O diálogo em sala de aula promove:",
      opcoes:["Distanciamento","Construção coletiva","Medo","Competição"],
      correta:1
    },
    {
      pergunta:"Para Paulo Freire, ninguém educa ninguém sozinho porque:",
      opcoes:["O aprendizado é coletivo","O professor sabe menos","O aluno não aprende","A escola é desnecessária"],
      correta:0
    },
    {
      pergunta:"O pensamento freiriano valoriza:",
      opcoes:["A obediência cega","A reflexão crítica","A punição","O autoritarismo"],
      correta:1
    },
    {
      pergunta:"A educação libertadora procura combater:",
      opcoes:["O pensamento crítico","A desigualdade social","O diálogo","A criatividade"],
      correta:1
    },
    {
      pergunta:"O aluno deve relacionar o conteúdo escolar com:",
      opcoes:["A televisão","Sua realidade","Apenas livros","A internet"],
      correta:1
    },
    {
      pergunta:"O professor deve incentivar:",
      opcoes:["O medo de errar","O silêncio","A curiosidade","A submissão"],
      correta:2
    },
    {
      pergunta:"Para Freire, aprender significa:",
      opcoes:["Decorar","Repetir","Compreender criticamente","Copiar"],
      correta:2
    },
    {
      pergunta:"O ensino tradicional é criticado porque:",
      opcoes:["Valoriza o diálogo","Torna o aluno passivo","Incentiva debates","Estimula criatividade"],
      correta:1
    },
    {
      pergunta:"A educação deve contribuir para:",
      opcoes:["Alienação","Liberdade","Controle absoluto","Desigualdade"],
      correta:1
    },
    {
      pergunta:"O diálogo exige:",
      opcoes:["Respeito mútuo","Autoritarismo","Medo","Competição"],
      correta:0
    },
    {
      pergunta:"Para Paulo Freire, o professor também:",
      opcoes:["Aprende com os alunos","Nunca erra","Apenas ensina","Deve ser rígido"],
      correta:0
    },
    {
      pergunta:"A escola deve incentivar:",
      opcoes:["Reflexão","Passividade","Silêncio","Decoração"],
      correta:0
    },
    {
      pergunta:"A pedagogia freiriana busca desenvolver:",
      opcoes:["Autonomia","Dependência","Medo","Obediência cega"],
      correta:0
    },
    {
      pergunta:"A prática educativa deve ser:",
      opcoes:["Mecânica","Humanizadora","Autoritária","Punitiva"],
      correta:1
    },
    {
      pergunta:"O aluno crítico é aquele que:",
      opcoes:["Questiona a realidade","Aceita tudo","Apenas copia","Não participa"],
      correta:0
    },
    {
      pergunta:"O ensino deve despertar:",
      opcoes:["Curiosidade","Medo","Competição exagerada","Passividade"],
      correta:0
    },
    {
      pergunta:"O diálogo aproxima:",
      opcoes:["Professor e aluno","Escola e prisão","Professor e punição","Aluno e silêncio"],
      correta:0
    },
    {
      pergunta:"O pensamento de Paulo Freire ficou conhecido principalmente por defender:",
      opcoes:["Educação libertadora","Educação militar","Ensino rígido","Ensino tecnicista"],
      correta:0
    },
    {
      pergunta:"A educação crítica ajuda o aluno a:",
      opcoes:["Entender o mundo","Decorar fórmulas","Obedecer ordens","Evitar perguntas"],
      correta:0
    },
    {
      pergunta:"A pedagogia freiriana combate:",
      opcoes:["O diálogo","A opressão","A criatividade","A participação"],
      correta:1
    },
    {
      pergunta:"Para Freire, a palavra tem poder de:",
      opcoes:["Transformação","Controle","Silêncio","Repressão"],
      correta:0
    },
    {
      pergunta:"O aprendizado acontece melhor quando existe:",
      opcoes:["Medo","Participação","Castigo","Rigidez"],
      correta:1
    },
    {
      pergunta:"A educação deve incentivar:",
      opcoes:["A cidadania","A alienação","O silêncio","O isolamento"],
      correta:0
    },
    {
      pergunta:"O pensamento crítico permite:",
      opcoes:["Compreender problemas sociais","Apenas decorar","Evitar reflexões","Ignorar a realidade"],
      correta:0
    },
    {
      pergunta:"A prática do diálogo contribui para:",
      opcoes:["Construção de conhecimento","Autoritarismo","Competição","Repressão"],
      correta:0
    },
    {
      pergunta:"A educação transformadora busca:",
      opcoes:["Mudança social","Controle social","Passividade","Repetição"],
      correta:0
    },
    {
      pergunta:"O estudante deve ser incentivado a:",
      opcoes:["Participar das discussões","Ficar calado","Apenas copiar","Não questionar"],
      correta:0
    },
    {
      pergunta:"O professor freiriano acredita que ensinar é:",
      opcoes:["Compartilhar saberes","Impor ideias","Punir erros","Decorar conteúdos"],
      correta:0
    },
    {
      pergunta:"Paulo Freire defendia uma educação:",
      opcoes:["Democrática","Excludente","Autoritária","Mecânica"],
      correta:0
    }

  ],

  geral: [

    {
      pergunta:"A capital do Canadá é:",
      opcoes:["Toronto","Vancouver","Ottawa","Montreal"],
      correta:2
    },
    {
      pergunta:"O bioma predominante no Brasil Central é:",
      opcoes:["Amazônia","Cerrado","Caatinga","Mata Atlântica"],
      correta:1
    },
    {
      pergunta:"O planeta mais próximo do Sol é:",
      opcoes:["Vênus","Terra","Mercúrio","Marte"],
      correta:2
    },
    {
      pergunta:"A Revolução Industrial teve início em qual país?",
      opcoes:["França","Estados Unidos","Alemanha","Inglaterra"],
      correta:3
    },
    {
      pergunta:"O idioma mais falado no mundo em número de falantes nativos é:",
      opcoes:["Inglês","Espanhol","Mandarim","Hindi"],
      correta:2
    },
    {
      pergunta:"Qual é o maior oceano do planeta?",
      opcoes:["Atlântico","Índico","Pacífico","Ártico"],
      correta:2
    },
    {
      pergunta:"Quem foi o primeiro presidente do Brasil?",
      opcoes:["Getúlio Vargas","Deodoro da Fonseca","Juscelino Kubitschek","Dom Pedro II"],
      correta:1
    },
    {
      pergunta:"Qual é o símbolo químico do ouro?",
      opcoes:["Ag","Au","Fe","O"],
      correta:1
    },
    {
      pergunta:"A camada da atmosfera onde ocorre a maior parte dos fenômenos climáticos é:",
      opcoes:["Estratosfera","Troposfera","Mesosfera","Exosfera"],
      correta:1
    },
    {
      pergunta:"A Segunda Guerra Mundial terminou em:",
      opcoes:["1918","1939","1945","1960"],
      correta:2
    },
    {
      pergunta:"Qual é o continente mais populoso do mundo?",
      opcoes:["África","Europa","América","Ásia"],
      correta:3
    },
    {
      pergunta:"A independência do Brasil ocorreu em:",
      opcoes:["1492","1500","1822","1889"],
      correta:2
    },
    {
      pergunta:"Quem escreveu Dom Casmurro?",
      opcoes:["José de Alencar","Clarice Lispector","Machado de Assis","Guimarães Rosa"],
      correta:2
    },
    {
      pergunta:"Em que continente fica o Egito?",
      opcoes:["Ásia","Europa","América","África"],
      correta:3
    },
    {
      pergunta:"Qual planeta é conhecido como Planeta Vermelho?",
      opcoes:["Júpiter","Saturno","Marte","Vênus"],
      correta:2
    },
    {
      pergunta:"Quantos lados tem um hexágono?",
      opcoes:["5","7","8","6"],
      correta:3
    },
    {
      pergunta:"Quantos estados tem o Brasil?",
      opcoes:["25","27","26","28"],
      correta:1
    },
    {
      pergunta:"Qual gás os seres humanos exalam ao respirar?",
      opcoes:["Oxigênio","Nitrogênio","Hidrogênio","Dióxido de carbono"],
      correta:3
    },
    {
      pergunta:"Qual é o menor planeta do Sistema Solar?",
      opcoes:["Marte","Mercúrio","Vênus","Plutão"],
      correta:1
    },
    {
      pergunta:"Qual é o rio mais longo do mundo?",
      opcoes:["Amazonas","Nilo","Yangtzé","Mississippi"],
      correta:1
    },
    {
      pergunta:"Qual é a moeda oficial do Japão?",
      opcoes:["Won","Yuan","Iene","Dólar"],
      correta:2
    },
    {
      pergunta:"Quem pintou Mona Lisa?",
      opcoes:["Pablo Picasso","Leonardo da Vinci","Michelangelo","Van Gogh"],
      correta:1
    },
    {
      pergunta:"O maior país do mundo em extensão territorial é:",
      opcoes:["China","Canadá","Rússia","Estados Unidos"],
      correta:2
    },
    {
      pergunta:"Quantos continentes existem?",
      opcoes:["5","6","7","8"],
      correta:2
    },
    {
      pergunta:"Qual é o idioma oficial do Brasil?",
      opcoes:["Espanhol","Inglês","Português","Francês"],
      correta:2
    },
    {
      pergunta:"Qual é o animal símbolo da Austrália?",
      opcoes:["Panda","Canguru","Tigre","Águia"],
      correta:1
    },
    {
      pergunta:"Em qual país fica a Torre Eiffel?",
      opcoes:["Itália","Inglaterra","França","Alemanha"],
      correta:2
    },
    {
      pergunta:"Qual é o maior planeta do Sistema Solar?",
      opcoes:["Terra","Saturno","Marte","Júpiter"],
      correta:3
    },
    {
      pergunta:"Qual destes é um mamífero?",
      opcoes:["Cobra","Sapo","Baleia","Tubarão"],
      correta:2
    },
    {
      pergunta:"Quantos dias tem um ano bissexto?",
      opcoes:["364","365","366","367"],
      correta:2
    },
    {
      pergunta:"Qual é a capital da Argentina?",
      opcoes:["Santiago","Montevidéu","Lima","Buenos Aires"],
      correta:3
    },
    {
      pergunta:"Quem descobriu o Brasil segundo a história tradicional?",
      opcoes:["Dom Pedro I","Pedro Álvares Cabral","Tiradentes","Vasco da Gama"],
      correta:1
    },
    {
      pergunta:"Qual é a fórmula química da água?",
      opcoes:["CO₂","H₂O","O₂","NaCl"],
      correta:1
    },
    {
      pergunta:"Qual é o maior deserto do mundo?",
      opcoes:["Saara","Atacama","Antártida","Gobi"],
      correta:2
    },
    {
      pergunta:"Em qual estado brasileiro fica Salvador?",
      opcoes:["Pernambuco","Ceará","Bahia","Sergipe"],
      correta:2
    },
    {
      pergunta:"Qual instrumento mede a temperatura?",
      opcoes:["Barômetro","Termômetro","Microscópio","Régua"],
      correta:1
    },
    {
      pergunta:"O Sol é considerado:",
      opcoes:["Um planeta","Uma estrela","Um satélite","Um cometa"],
      correta:1
    },
    {
      pergunta:"Qual é o idioma oficial da Espanha?",
      opcoes:["Italiano","Espanhol","Francês","Inglês"],
      correta:1
    },
    {
      pergunta:"Quem foi conhecido como o Pai da Aviação?",
      opcoes:["Santos Dumont","Einstein","Newton","Galileu"],
      correta:0
    },
    {
      pergunta:"Qual é a capital do Brasil?",
      opcoes:["Rio de Janeiro","São Paulo","Brasília","Salvador"],
      correta:2
    },
    {
      pergunta:"Quantas cores tem o arco-íris tradicionalmente?",
      opcoes:["5","6","7","8"],
      correta:2
    },
    {
      pergunta:"Qual é o maior animal terrestre?",
      opcoes:["Girafa","Rinoceronte","Hipopótamo","Elefante"],
      correta:3
    },
    {
      pergunta:"Em qual planeta vivemos?",
      opcoes:["Marte","Saturno","Terra","Vênus"],
      correta:2
    },
    {
      pergunta:"Qual destes países fica na América do Sul?",
      opcoes:["Portugal","México","Chile","Canadá"],
      correta:2
    },
    {
      pergunta:"Quem escreveu O Pequeno Príncipe?",
      opcoes:["Monteiro Lobato","Antoine de Saint-Exupéry","Machado de Assis","Carlos Drummond"],
      correta:1
    },
    {
      pergunta:"O Brasil pertence a qual continente?",
      opcoes:["Europa","América do Sul","África","Oceania"],
      correta:1
    },
    {
      pergunta:"Qual é o ponto mais alto do Brasil?",
      opcoes:["Pico da Neblina","Pão de Açúcar","Pico Paraná","Monte Roraima"],
      correta:0
    },
    {
      pergunta:"Qual é o principal gás presente na atmosfera terrestre?",
      opcoes:["Oxigênio","Nitrogênio","Hidrogênio","Gás carbônico"],
      correta:1
    },
    {
      pergunta:"Quantos planetas existem no Sistema Solar?",
      opcoes:["7","8","9","10"],
      correta:1
    },
    {
      pergunta:"Qual país é famoso pelas pirâmides de Gizé?",
      opcoes:["Índia","México","Egito","Peru"],
      correta:2
    }

  ]
};

// mostrar pergunta

const perguntaEl = document.getElementById("pergunta");

if(perguntaEl){

  const categoria = localStorage.getItem("categoria");

  const numero = localStorage.getItem("numeroPergunta");

  const pergunta = perguntas[categoria][numero - 1];

  perguntaEl.innerText = pergunta.pergunta;

  const opcoesEl = document.getElementById("opcoes");

  pergunta.opcoes.forEach((texto, i) => {

    const botao = document.createElement("button");

    botao.classList.add("opcao");

    botao.innerText = texto;

    botao.onclick = () =>
      verificarResposta(botao, i, pergunta.correta);

    opcoesEl.appendChild(botao);

  });

}

// verificar resposta

function verificarResposta(botao, selecionada, correta){

  if(selecionada === correta){

    botao.classList.add("correta");

    const todas = document.querySelectorAll(".opcao");

    todas.forEach(btn => {
      btn.disabled = true;
    });

    document.getElementById("resetar").style.display = "none";

  }else{

    botao.classList.add("errada");

    botao.disabled = true;

    document.getElementById("resetar").style.display = "block";
  }
}

// tentar novamente

function tentarNovamente(){

  const opcoes = document.querySelectorAll(".opcao");

  opcoes.forEach(opcao => {

    opcao.classList.remove("errada");

    opcao.disabled = false;

  });

  document.getElementById("resetar").style.display = "none";
}

function voltarCategorias(){

  window.location.href = "categorias.html";
}

function voltarMenu(){
  window.location.href = "../index.html";
}