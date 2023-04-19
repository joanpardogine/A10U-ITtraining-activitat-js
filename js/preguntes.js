'use strict'


function creaTitol(tecnologiaRebuda) {
    let titol = document.createElement("span")
    // Creem un element de tipus "span" per la primera part del titol
    let spanTitol1 = document.createElement("span")
    // Afegim el color vermell (del nostre css) a l'element de la primera part del titol
    spanTitol1.classList.add("vermell")
    spanTitol1.innerHTML = titolPart1;
    titol.appendChild(spanTitol1);

    // Creem un element de tipus "span" per la segona part del titol
    let spanTitol2 = document.createElement("span")
    // Afegim el color groc (del nostre css) a l'element de la segona part del titol
    spanTitol2.classList.add("groc")
    spanTitol2.innerHTML = titolPart2 + "&nbsp;";
    titol.appendChild(spanTitol2);

    // Creem un element de tipus "span" per la tecnologia web del **```serious games```**, 'es a dir tercera part del titol
    let spanTitol3 = document.createElement("span")
    // Afegim el color verd (del nostre css) a l'element de la tecnologia del titol
    spanTitol3.classList.add("verd")
    spanTitol3.innerHTML = tecnologiaRebuda;
    titol.appendChild(spanTitol3);
    return titol;
}

function creaPregunta(index) {
    // Creem un element de tipus "article" per crear una pregunta
    let cadenaQtatPreguntes = ` de ${preguntes.length}`;
    let tipusDePregunta = preguntes[index].tipusPreg;

    let elementArticle = document.createElement("article");

    let preguntaNom = `preg-0${index+1}`
    let preguntaValor = `pregunta-0${index+1}-${preguntes[index].tipusPreg}`

    elementArticle.setAttribute("name", preguntaNom);
    elementArticle.setAttribute("value", preguntaValor);
    elementArticle.setAttribute("id", preguntaValor);
    if (index == preguntaActual - 1) {
        elementArticle.classList.add("elementVisible");
    } else {
        elementArticle.classList.add("elementOcult");
    }

    let spanTitol = document.createElement("span");
    spanTitol.setAttribute("name","Titol");
    spanTitol.classList.add("titol");
    spanTitol.innerHTML = `Pregunta #${index+1}${cadenaQtatPreguntes}`;
    elementArticle.appendChild(spanTitol);

    let divEnunciat = document.createElement("div");
    divEnunciat.setAttribute("name", "Enunciat");
    divEnunciat.classList.add("enunciat");

    let pEnunciat = document.createElement("p");

    pEnunciat.innerHTML = `${preguntes[index].enunciat}`;
    divEnunciat.appendChild(pEnunciat);
    elementArticle.appendChild(divEnunciat);

    let divResposta = document.createElement("div");
    divResposta.setAttribute("name", "Resposta");
    divResposta.classList.add("respostes");

    // Fins aquí tots els tipous de respostes són iguals! 

    let elementLabel = document.createElement("label");
    elementLabel.classList.add("opcio");
    elementLabel.classList.add("ample100");

    let elementInput = document.createElement("input");

    elementInput.setAttribute("type", "text");
    elementInput.setAttribute("id", `resp-0${index+1}`); // Pregunta #${index+1}
    elementInput.setAttribute("name", "resposta1");
    elementInput.setAttribute("placeholder", placeHolderEntraResposta);

    elementLabel.appendChild(elementInput);

    divResposta.appendChild(elementLabel);
        
    // A partir d'aquí tots els tipus de respostes TORNEN a ser iguals!

    elementArticle.appendChild(divResposta);
    
    // Creem l'espai dels botons
    let botons = document.createElement("div");
    
    let botoAnterior = document.createElement("button");
    botoAnterior.addEventListener("click", mostraAlerta);
    botoAnterior.disabled = true;
    botoAnterior.innerHTML = "&lt;&lt; Anterior";
    botons.appendChild(botoAnterior);
    
    let botoSeguent = document.createElement("button");
    botoSeguent.addEventListener("click", passaSeguent);
    botoSeguent.innerHTML = "Següent &gt;&gt;";
    botons.appendChild(botoSeguent);
    
    // Afegim l'espai dels botons a l'element
    
    elementArticle.appendChild(botons);

    return elementArticle;
}


function passaSeguent() {
    let elementPreguntaActual = document.getElementsByName(`preg-0${preguntaActual}`);
    let elementPreguntaSeguent = document.getElementsByName(`preg-0${preguntaActual+1}`);

    if (elementPreguntaSeguent.length == 0) {

        let elementPuntuacio = document.getElementsByName(`Puntuacio`);
        console.log(`resposta`);
        // alert(`resposta`);
        elementPreguntaActual[0].classList.remove("elementVisible");
        elementPreguntaActual[0].classList.add("elementOcult");
        elementPuntuacio[0].classList.remove("elementOcult");
        elementPuntuacio[0].classList.add("elementVisible");
    } else {
        // alert(`preg-0\${preguntaActual} = preg-0${preguntaActual}`);
        console.log(`preg-0\${preguntaActual} = preg-0${preguntaActual}`);
        elementPreguntaActual[0].classList.remove("elementVisible");
        elementPreguntaActual[0].classList.add("elementOcult");
        preguntaActual += 1;
        elementPreguntaSeguent[0].classList.remove("elementOcult");
        elementPreguntaSeguent[0].classList.add("elementVisible");
    }
}

function creaPuntuacio(index) {
    let elementPuntuacio = document.createElement("article");

    elementPuntuacio.setAttribute("name", "Puntuacio");
    elementPuntuacio.classList.add("elementOcult");

    let spanTitol = document.createElement("span");
    spanTitol.classList.add("titol");
    spanTitol.innerHTML = `Resum de punts`;
    elementPuntuacio.appendChild(spanTitol);

    return elementPuntuacio;
}


function mostraAlerta() {
    alert("Has pitjat el botò Anterior que encara no s'ha desenvolupat!");
}



// Inicialització de variables
let placeHolderEntraResposta = "Entra la resposta";

// Inicialització de la variable tecnologia per indicar amb quina tecnologia web estarà basat el **```serious games```**
let titolPart1 = "IT"
let titolPart2 = "Training"
let tecnologia = "Python";

// Localitzem l'element que conté l'Id("titol")
let titol = document.getElementById("titol");

// Creació del titol un cop que ja tenim les tres parts del titol
titol.appendChild(creaTitol(tecnologia));

// Inicialització de les preguntes
let preguntes = [{
        tipusPreg: "tx",
        enunciat: "Quin és l'origen del nom Python?",
        respostaA: "",
        respostaB: "",
        respostaC: "",
        respostaD: "",
        correcta: ["Monty", "Python"]
    },
    {
        tipusPreg: "tx",
        enunciat: "Quin és el creador de Python?",
        respostaA: "",
        respostaB: "",
        respostaC: "",
        respostaD: "",
        correcta: ["Guido van Rossum"]
    },
    {
        tipusPreg: "ra",
        enunciat: "Quina és la sintaxi correcta per sortir \"Hello World\" a Python?",
        respostaA: "echo(\"Hello World\");",
        respostaB: "print(Hello World);",
        respostaC: "print(\"Hello World\")",
        respostaD: "echo(\"Hello World\")",
        correcta: ["C"]
    },
    {
        tipusPreg: "so",
        enunciat: "Com  inseriu COMENTARIS al codi Python?",
        respostaA: "// Això és un comentari",
        respostaB: "& Això és un comentari",
        respostaC: "\"\"\" Això és un comentari\"\"\"",
        respostaD: "<!-- Això és un comentari -->",
        correcta: ["A"]
    },
    {
        tipusPreg: "ch",
        enunciat: "Quin NO és un nom de variable legal a Python?",
        respostaA: "LaMevaVariable",
        respostaB: "_LaMevaVariable",
        respostaC: "La_Meva_Variable",
        respostaD: "La-Meva-Variable",
        correcta: ["D"]
    }
];

let qtatPreguntes = preguntes.length;
let preguntaActual = 1;

console.log(`El nomste serious games té ${qtatPreguntes}`);

// Localitzem el primer element [0] de tipus main
let elementMain = document.getElementsByTagName("main")[0];

preguntes.forEach(function callback(pregunta, index) {
    console.log(`De la pregunta ${index+1} de ${qtatPreguntes}\n` +
        `El tipus de pregunta és = ${pregunta.tipusPreg}\n` +
        `L'enunciat és = ${pregunta.enunciat}`);
    elementMain.appendChild(creaPregunta(index));
});

elementMain.appendChild(creaPuntuacio());