// Inicialització de les preguntes

function mostraAlerta(){
  alert("Has pitjat la tecla Següent!");
}

let titolPart1 = "IT"
let titolPart2 = "Training"
let missatge = "Entra la resposta";
let tema = "HTML";

let preguntes = [
  {
    tipusPreg : "tx",
    enunciat : "Què significa HTML?",
    respostaA : "Hyper Text Markup Language",
    respostaB : "Home Tool Markup Language",
    respostaC : "Hyperlinks and Text Markup Language",
    respostaD : "Cap de les anteriors",
    correcta : "A"
  }
];

let titol = document.getElementById("titol");

let spanTitol1 = document.createElement("span")
spanTitol1.classList.add("vermell")
spanTitol1.innerHTML=titolPart1;
titol.appendChild(spanTitol1);

let spanTitol2 = document.createElement("span")
spanTitol2.classList.add("groc")
spanTitol2.innerHTML=titolPart2 + "&nbsp;";
titol.appendChild(spanTitol2);

let spanTitol3 = document.createElement("span")
spanTitol3.classList.add("verd")
spanTitol3.innerHTML=tema;
titol.appendChild(spanTitol3);

let elementMain = document.getElementsByTagName("main")[0];

let elementArticle = document.createElement("article");
let preguntaActual = `pregunta-01-${preguntes[0].tipusPreg}`

elementArticle.setAttribute("value", preguntaActual);
elementArticle.setAttribute("id", preguntaActual);

let spanTitol = document.createElement("span");
spanTitol.classList.add("titol");
spanTitol.innerHTML = `Pregunta #1`;
elementArticle.appendChild(spanTitol);

let divEnunciat = document.createElement("div");
divEnunciat.classList.add("enunciat");

let pEnunciat = document.createElement("p");

pEnunciat.innerHTML=`${preguntes[0].enunciat}`;
divEnunciat.appendChild(pEnunciat);
elementArticle.appendChild(divEnunciat);

let divResposta = document.createElement("div");
divResposta.classList.add("respostes");

let elementLabel = document.createElement("label");
elementLabel.classList.add("opcio");
elementLabel.classList.add("ample100");

let elementInput = document.createElement("input");

elementInput.setAttribute("type", "text");
elementInput.setAttribute("id", "resp-01");
elementInput.setAttribute("name", "resposta1");
elementInput.setAttribute("placeholder", missatge);

elementLabel.appendChild(elementInput);
divResposta.appendChild(elementLabel);
elementArticle.appendChild(divResposta);

let botoSeguent = document.createElement("button");
botoSeguent.addEventListener("click", mostraAlerta);
botoSeguent.innerHTML = "Següent";

elementArticle.appendChild(botoSeguent);
elementMain.appendChild(elementArticle);


