# Activitat 10: IT training

**ITtraining** és un portal web que té com a objectiu oferir als usuaris una sèrie de [**```serious games```**](https://en.wikipedia.org/wiki/Serious_game) (*jocs dissenyats amb un propòsit principal diferent del pur entreteniment*) basats en tecnologies web. A través d'aquesta web els usuaris podran demostrar els seus coneixements en **```HTML```**, **```CSS```**, **```JavaScript```**, **```Bootstrap```**, **```PHP```**, **```SQL```**, etc.

Actualment s'està treballant en el desenvolupament d'una nova versió d'aquesta aplicació, precisament per aquest
motiu han contactat amb nosaltres. El disseny de la web ja està definit, però falta programar tota la funcionalitat dels
jocs. Aquesta funcionalitat es programarà amb **```JavaScript```**.

La nova versió d'**```ITtraining```** ha de funcionar com una **Single-Page Application** (aplicació d'una única pàgina). La transició entre les diferents vistes també es gestionarà a través de **```JavaScript```**.

Abans de començar, decideix en quina tecnologia web estarà basat el teu **```serious games```**. Pensa en quatre possibles
preguntes, tenint en compte que el mètode de resposta ha de variar (resposta oberta, seleccionar una opció,
selecció múltiple, etc.). Hauràs de fer servir diferents tipus d'elements de formulari per cadascuna de les
preguntes.

1. A la part superior de la web es mostra el text **```ITtraining Lorem```**. Substitueix **```Lorem```** pel nom de la
tecnologia en la que es basa el teu joc (per exemple, es podria mostrar **```ITtraining HTML```**)

1. Les preguntes que vulguis fer a l'usuari estaran emmagatzemades, **de moment**, en una variable de tipus **matriu** amb la següent estructura de dades de **```JavaScript```**.

```js
    tipusPreg : "ra",
    enunciat  : "Què significa HTML?",
    respostaA : "Hyper Text Markup Language",
    respostaB : "Home Tool Markup Language",
    respostaC : "Hyperlinks and Text Markup Language",
    respostaD : "Cap de les anteriors",
    correcta  : "A"
```

A on:

> **```tipusPreg```**: serà un valor entre els 4 valors possibles:
>  1. **```tx```**: La resposta serà **oberta**, per tant, l'usuari podrà respondre el que vulgui.
>  2. **```ch```**: La resposta pot tenir **més d'una** resposta possible, és a dir que l'usuari podrà escollir entre les 4 respostes que se li ofereixin.
>  3. **```ra```**: Resposta única, l'usuari només podrà escollir **una** de les 4 respostes que se li ofereixin. En aquest format podrà escollir amb el format **```HTML```** de **```radiobutton```**.
>  4. **```so```**: Resposta única, al igual que l'anterio, l'usuari només podrà escollir **una** de les 4 respostes que se li ofereixin. Però en aquesta ocasió es farà servir el format **```select/option ```** d'**```HTML```**, és a dir amb un menú desplegable.

1. El format en que es mostrarán les preguntes, com ja s'ha comentat anteriorment, serà amb una **secció** (element **```article```** d'**```HTML```** ) per a cadacuna de les preguntes que es formulin. Ara mateix, només hi ha una secció, però caldrà que creeu ja d'entrada, tantes seccions com preguntes es formulin.

1. En canviar de pregunta has d'aconseguir que la **pregunta actual** s'amagi i aparegui la següent pregunta.

1. Les respostes facilitades per l'usuari s'hauran d'emmagatzemar en variables o estructures de dades de **```JavaScript```**. Aquesta estructura la definirà cadascú de vosaltres segons ho determini.

1. Després de l'última pregunta s'haurà de mostrar una secció addicional amb els resultats obtinguts. És a dir **respostes donades** *versus* **respostes correctes**, amb la puntuació obtinguda, missatge, etc. Aquesta secció addicional no existeix al document **```HTML```**, l'hauràs de crear tu mateix.


## Exemple

Contingut del fitxer **```preguntes.js```**`, en aquest fitxer hi ha:

### Variable **```tecnologia```**

Aquesta variable el tipus de tecnologia del vostre **```serious games```**. Per tant, caldrà que es modifiqui en començar l'execució de la pàgina.

```js
let tecnologia = "Lorem"
```


### Variable **```preguntes```**

La variable **```preguntes```**, serà de tipus matriu i caldrà que tingui´:
1. l'enunciat de la pregunta,
2. les possibles respostes i
3. la resposta o respostes correctes.

El que es mostra és solament i exclusivament a títol d'exemple. No cal que sigui exacte al mostrat. El que si que és imprescindible es que com a mímin hi hagi el quatre components esmentats (enunciat, possibles respostes i la resposta o respostes correctes).

```js
let preguntes = [
    {
        tipusPreg : "ra",
        tipusPreg : "ra",
        enunciat : "Què significa HTML?",
        respostaA : "Hyper Text Markup Language",
        respostaB : "Home Tool Markup Language",
        respostaC : "Hyperlinks and Text Markup Language",
        respostaD : "Cap de les anteriors",
        correcta : "A"
      }
];
```


# Element **```article```** per una pregunta de tipus **text obert** (**```tx```**).

```html
<article id="pregunta-XX-tx">
    <span class="titol">Pregunta #???</span>
    <div class="enunciat">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?</p>
    </div>
    <div class="respostes">
        <label class="opcio ample100">
            <input type="text" id="resp-01" name="resposta-1" placeholder="Ut enim ad minima veniam" />
    </label>
    </div>
        <button>&gt;&gt; Anterior</button>
    <button>Següent &lt;&lt;</button>
</article> <!-- FINAL <article id="pregunta-#"> -->
```

![pregunta de tipus **text obert** (**```tx```**)](./img/01-tipus-tx.png)

# Element **```article```** per una pregunta de tipus **checkbox** (**```ch```**).

```html
<article id="pregunta-XX-ch">
    <span class="titol">Pregunta #???</span>
    <div class="enunciat">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?</p>
    </div>
    <div class="respostes">
        <label class="opcio ample45">
            <input type="checkbox" name="preg_XX" id="resp-XX-01"/>
        <span>Seda ut perspiciatis unde omnis</span>
    </label>
    <label class="opcio ample45">
        <input type="checkbox" name="preg_XX" id="resp-XX-02"/>
        <span>Nemo enim ipsam voluptatem quia</span>
    </label>
    <label class="opcio ample45">
        <input type="checkbox" name="preg_XX" id="resp-XX-03"/>
        <span>At vero eos et accusamus et iusto odio</span>
    </label>
    <label class="opcio ample45">
        <input type="checkbox" name="preg_XX" id="resp-XX-04"/>
        <span>Et harum quidem rerum facilis est et expedita</span>
    </label>
    </div> <!-- FINAL <div class="respostes">-->
        <button><< Anterior</button>
        <button>Següent >></button>
</article> <!-- FINAL <article id="pregunta-#"> -->
```

![pregunta de tipus **checkbox** (**```ch```**)](./img/02-tipus-ch.png)


# Element **```article```** per una pregunta de tipus **radiobutton** (**```ra```**).

```html
<article id="pregunta-XX-ra">
    <span class="titol">Pregunta #XX</span>
    <div class="enunciat">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?</p>
    </div>
    <div class="respostes">
        <label class="opcio ample45">
            <input type="radio" name="preg_XX" id="resp-XX-01"/>
        <span>Seda ut perspiciatis unde omnis</span>
    </label>
    <label class="opcio ample45">
        <input type="radio" name="preg_XX" id="resp-XX-02"/>
        <span>Nemo enim ipsam voluptatem quia</span>
    </label>
    <label class="opcio ample45">
        <input type="radio" name="preg_XX" id="resp-XX-03"/>
        <span>At vero eos et accusamus et iusto odio</span>
    </label>
    <label class="opcio ample45">
        <input type="radio" name="preg_XX" id="resp-XX-04"/>
        <span>Et harum quidem rerum facilis est et expedita</span>
    </label>
    </div> <!-- FINAL <div class="respostes">-->
        <button><< Anterior</button>
    <button>Següent >></button>
</article> <!-- FINAL <article id="pregunta-#"> -->
```

![pregunta de tipus **radiobutton** (**```ra```**)](./img/03-tipus-ra.png)

# Element **```article```** per una pregunta de tipus **```select option```** o **desplegable** (**```so```**).

```html
<article id="pregunta-XX-so">
    <span class="titol">Pregunta XX</span>
    <div class="enunciat">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?</p>
    </div>
    <div class="respostes">
        <label class="opcio ample100">
            <select id="resp-XX">
                <option id="resp-XX-00" selected>&lt;Escull una de les següents opcions.></option>
                <option id="resp-XX-01">At vero eos et accusamus et iusto odio</option>
                <option id="resp-XX-02">Et harum quidem rerum facilis est et expedita</option>
                <option id="resp-XX-03">Temporibus autem quibusdam et aut officiis debitis</option>
            </select>
        </label>
    </div> <!-- FINAL <div class="respostes"> -->
    <button><< Anterior</button>
    <button>Següent >></button>
</article>  <!-- FINAL <article id="pregunta-#"> -->
```

![pregunta de tipus **select option** (**```so```**)](./img/04-tipus-so.png)


# Primera part

Crear un nou repositori remot amb el nom **```<CognomAlumne>-A10U-ITtraining```**, on **```<CognomAlumne>```** és el cognom de l'alumne, sense el nom de l'alumne. És important que respecteu tant els guions com les majúscules o minúscules del nom del repositori. I cal que sigui **privat** i convideu a l'usuari **```joanpardogine```** com a col·laborador.

Crear una branca amb el nom **```<CognomAlumne>-1aEntrega```**, on **```<CognomAlumne>```** és el cognom de l'alumne, sense el nom de l'alumne, en el fitxer **```README.md```** caldrà que detallis el tema (**```tecnologia```**) del teu **```serious games```**, i un mínim de 5 preguntes amb les corresponents respostes i indicant quina és la resposta correcta.