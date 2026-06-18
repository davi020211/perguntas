let pontuacao=0
const perguntas = [

{
tipo:"alternativa",
pergunta:"Qual é a capital da China?",
opcoes:["Pequim","Xangai","Hong Kong","Macau"],
resposta:"Pequim"
},

{
tipo:"alternativa",
pergunta:"Qual é a moeda oficial da China?",
opcoes:["Won","Iene","Yuan","Dólar"],
resposta:"Yuan"
},
    
{
tipo:"alternativa",
pergunta:"Em qual continente a China está localizada?",
opcoes:["Europa","Ásia","África","Oceania"],
resposta:"Ásia"
},

{
tipo:"alternativa",
pergunta:"Qual animal é símbolo tradicional da China?",
opcoes:["Urso","Dragão","Lobo","Tigre"],
resposta:"Dragão"
},

{
tipo:"alternativa",
pergunta:"Qual é a cor da sorte na cultura chinesa?",
opcoes:["Azul","Verde","Vermelho","Branco"],
resposta:"Vermelho"
},

{
tipo:"escrita",
pergunta:"Qual é o nome da famosa muralha chinesa?",
resposta:"Grande Muralha da China"
},

{
tipo:"escrita",
pergunta:"Qual cidade abriga a Cidade Proibida?",
resposta:"Pequim"
},

{
tipo:"escrita",
pergunta:"Qual aplicativo pertence à ByteDance?",
resposta:"TikTok"
},


{
tipo:"alternativa",
pergunta:"Em relação às crenças religiosas e à diversidade cultural presente na sociedade chinesa contemporânea, qual das alternativas está correta?",
opcoes:[
"O país possui uma única religião oficial que é seguida pela totalidade da população chinesa.",
"O hinduísmo é a religião praticada pela maioria absoluta dos habitantes da China.",
"O islamismo é a religião predominante e seguida pela maior parte da população chinesa.",
"A sociedade chinesa apresenta uma grande diversidade religiosa, além de uma significativa parcela da população sem filiação religiosa."],
resposta:"A sociedade chinesa apresenta uma grande diversidade religiosa, além de uma significativa parcela da população sem filiação religiosa."
},

{
tipo:"alternativa",
pergunta:"Com base nos indicadores sociais e de saúde da população chinesa, qual é a expectativa de vida média aproximada dos habitantes do país?",
opcoes:[
"A expectativa de vida média é inferior a 70 anos de idade.",
"A expectativa de vida média é de cerca de 80 anos de idade.",
"A expectativa de vida média supera os 85 anos de idade.",
"Os dados sobre expectativa de vida não são conhecidos nem divulgados oficialmente."],
resposta:"A expectativa de vida média é de cerca de 80 anos de idade."
},

{
tipo:"alternativa",
pergunta:"O sistema educacional chinês possui um período de escolarização obrigatória garantido pelo governo. Quantos anos dura essa educação obrigatória?",
opcoes:[
"O período de educação obrigatória possui duração de 14 anos.",
"O período de educação obrigatória possui duração de 9 anos.",
"O período de educação obrigatória possui duração de 12 anos.",
"O período de educação obrigatória possui duração de 16 anos."
],
resposta:"O período de educação obrigatória possui duração de 9 anos."
},

{
tipo:"alternativa",
pergunta:"A China é reconhecida por sua grande diversidade cultural e étnica. Quantos grupos étnicos são oficialmente reconhecidos pelo governo chinês?",
opcoes:[
"Apenas um grupo étnico é oficialmente reconhecido pelo governo.",
"Cinquenta e seis grupos étnicos são oficialmente reconhecidos.",
"Vinte e três grupos étnicos são oficialmente reconhecidos.",
"Dez grupos étnicos são oficialmente reconhecidos."
],
resposta:"Cinquenta e seis grupos étnicos são oficialmente reconhecidos."
},

{
tipo:"escrita",
pergunta:"Qual bloco econômico a China faz parte junto com o Brasil?",
resposta:"Brics"
},

{
tipo:"escrita",
pergunta:"A China se destaca principalmente no setor ____",
resposta:"Industrial"
},

{
tipo:"escrita",
pergunta:"Verdadeiro ou Falso: A China é o país com maior extensão territorial do mundo",
resposta:"Falso"
},

{
tipo:"escrita",
pergunta:"Verdadeiro ou Falso: A China é um dos principais países no mercado da tecnologia",
resposta:"Verdadeiro"
},

{
tipo:"escrita",
pergunta:"Verdadeiro ou Falso: A China está com uma crescente no comércio interno",
resposta:"Falso"
},

{
tipo:"alternativa",
pergunta:"Qual é a principal diferença entre as regiões norte e sul da China?",
opcoes:[
"O norte é quente e úmido, enquanto o sul é seco e congelado.",
"O norte apresenta áreas mais frias e secas, enquanto o sul é mais quente e úmido.",
"Ambas as regiões possuem clima perfeitamente idêntico e temperado.",
"O norte é uma floresta tropical densa e o sul é um deserto de areia."
],
resposta:"O norte apresenta áreas mais frias e secas, enquanto o sul é mais quente e úmido."
},

{
tipo:"escrita",
pergunta:"Qual problema a China enfrenta em relação a idade da população?",
resposta:"Envelhecimento."
},

{
tipo:"escrita",
pergunta:"Procurando reduzir os impactos ambientais causados pelas indústrias, em quais dois tipos específicos de energias renováveis o governo chinês tem investido intensivamente nos últimos anos?",
resposta:"Energia solar e energia eólica."
},

{
tipo:"alternativa",
pergunta:"A China possui minerais essenciais conhecidos como terras raras. Para qual segmento industrial moderno esses recursos específicos são considerados indispensáveis?",
opcoes:[
"Construção civil pesada e produção de cimento.",
"Indústria têxtil e confecção de calçados de couro.",
"Fabricação de produtos eletrônicos.",
"Refinamento de combustíveis fósseis tradicionais."
],
resposta:"Fabricação de produtos eletrônicos."
},

{
tipo:"escrita",
pergunta:"Além do carvão mineral, das terras raras e do gás natural, quais são os outros dois importantes recursos minerais ou energéticos tradicionais que a China possui em abundância e que foram citados no texto?",
resposta:"Petróleo e ferro."
},

{
tipo:"alternativa",
pergunta:"A transição para a energia limpa na China está acelerada. Com base em dados recentes de 2025/2026, as fontes renováveis já representam qual proporção da capacidade total de geração elétrica instalada no país?",
opcoes:[
"Pouco mais de 15%",
"Cerca de 35%",
"Mais de 60%",
"Exatamente 95%"
],
resposta:"Mais de 60%"
},

{
tipo:"alternativa",
pergunta:"Segundo os dados oficiais consolidados do Departamento Nacional de Estatísticas da China, qual foi a taxa de crescimento registrada para o Produto Interno Bruto (PIB) do país no ano de 2025?",
opcoes:[
"1,2%",
"5,0%",
"8,3%",
"-2,4%"
],
resposta:"5,0%"
},

{
tipo:"alternativa",
pergunta:"No aspecto social e demográfico, a população da China registrou uma mudança importante em 2025, fechando o ano com cerca de 7,92 milhões de nascimentos e 11,31 milhões de óbitos. Qual foi o resultado direto dessa dinâmica para a taxa de crescimento natural do país?",
opcoes:[
"Uma taxa de crescimento positiva e acelerada.",
"Uma taxa perfeitamente equilibrada e estagnada em zero.",
"Uma taxa de crescimento negativa (causando o encolhimento populacional).",
"O rejuvenescimento imediato de toda a força de trabalho rural."
],
resposta:"Uma taxa de crescimento negativa (causando o encolhimento populacional)."
},

{
tipo:"escrita",
pergunta:"Qual cidade chinesa é considerada o principal centro financeiro do país?",
resposta:"Xangai"
},


{
tipo:"escrita",
pergunta:"Qual país faz fronteira com a China e possui armas nucleares?",
resposta:"Índia"
},

{
tipo:"escrita",
pergunta:"Qual iniciativa econômica chinesa busca conectar Ásia, Europa e África?",
resposta:"A Nova rota da seda"
},

{
tipo:"escrita",
pergunta:"Qual órgão governa oficialmente a China?",
resposta:"Partido Comunista"
},

{
tipo:"escrita",
pergunta:"Em que ano começou o projeto da Nova Rota da Seda?",
resposta:"2013"
},

{
tipo:"escrita",
pergunta:"Qual tecnologia chinesa gera preocupações geopolíticas em alguns países ocidentais?",
resposta:"Rede 5G"
},
];

let disponiveis = [...perguntas];

const perguntaArea =
document.getElementById("perguntaArea");

const resultado =
document.getElementById("resultado");

const contador =
document.getElementById("contador");

const btn =
document.getElementById("btnSortear");

btn.addEventListener(
"click",
sortearPergunta
);

atualizarPainel();

function atualizarPainel(){

contador.textContent =
disponiveis.length;
    
}

function sortearPergunta(){

if(disponiveis.length === 0){

mostrarFim();
return;
}

const indice =
Math.floor(
Math.random() *
disponiveis.length
);

const pergunta =
disponiveis.splice(
indice,
1
)[0];

mostrarPergunta(pergunta);

atualizarPainel();
}

function mostrarPergunta(pergunta){

resultado.innerHTML = "";

let html =
"<h2>" +
pergunta.pergunta +
"</h2>";

if(
pergunta.tipo ===
"alternativa"
){

for(
let i = 0;
i < pergunta.opcoes.length;
i++
){

html +=
"<div class='opcao' onclick=\"verificarAlternativa('" +
pergunta.opcoes[i] +
"','" +
pergunta.resposta +
"')\">" +
pergunta.opcoes[i] +
"</div>";
}

}else{

html +=
"<input id='respostaTexto' placeholder='Digite sua resposta'>";

html +=
"<br><br>";

html +=
"<button onclick=\"verificarEscrita('" +
pergunta.resposta +
"')\">Responder</button>";
}

perguntaArea.innerHTML =
html;
}

function verificarAlternativa(
escolhida,
correta
){
    

if(
escolhida === correta
){
    

resultado.innerHTML =
"✅ Resposta correta!";

resultado.style.color =
"green";

}else{

resultado.innerHTML =
"❌ Resposta correta: " +
correta;

resultado.style.color =
"red";
}

atualizarPainel();
}

function verificarEscrita(
correta
){
    

const respostaUsuario =
document
.getElementById(
"respostaTexto"
)
.value
.trim()
.toLowerCase();

if(
respostaUsuario ===
correta.toLowerCase()
){

    
pontuacao++;

resu aleatório E se ele acertar ele avançar 12 você bota 12 mas se ele errar você amansar duas e ele volta 12 altado.innerHTML =
"✅ Resposta correta!";

resultado.style.color =
"green";

}else{

resultado.innerHTML =
"❌ Resposta correta: " +
correta;

resultado.style.color =
"red";
}

atualizarPainel();
}

function mostrarFim(){

function mostrarFim(){

perguntaArea.innerHTML =

"<div class='fim-jogo'>" +

"<h2>🏮 Todas as perguntas foram utilizadas!</h2>" +

"<p>As perguntas serão reiniciadas.</p>" +

"<br>" +

"<button onclick='reiniciar()'>" +

"Reiniciar Perguntas" +

"</button>" +

"</div>";
}

perguntaArea.innerHTML =

"<div class='fim-jogo'>" +

"<h2>Fim do Desafio!</h2>" +

"<h3>" +
titulo +
"</h3>" +

"<p>Você acertou " +

pontuacao +
" perguntas.</p>" +

"<br>" +

"<button onclick='reiniciar()'>" +
"Jogar Novamente" +
"</button>" +

"</div>";
}

function reiniciar(){

disponiveis =
[...perguntas];
    

resultado.innerHTML = "";

perguntaArea.innerHTML =
"<h2>Jogo Reiniciado!</h2>";

atualizarPainel();
}
