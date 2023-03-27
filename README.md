
```js
let tema = "HTML"

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
    </div> <!-- FINAL <div class="respostes">-->
        <button><< Anterior</button>
    <button>Següent >></button>
</article> <!-- FINAL <article id="pregunta-#"> -->
```

![pregunta de tipus **text obert** (**```tx```**)](./img/tipus-tx.png)

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

![pregunta de tipus **checkbox** (**```ch```**)](./img/tipus-ch.png)


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

![pregunta de tipus **radiobutton** (**```ra```**)](./img/tipus-ra.png)

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

![pregunta de tipus **select option** (**```so```**)](./img/tipus-so.png)