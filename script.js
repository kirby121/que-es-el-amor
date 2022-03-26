const d = document,
$startBtn = d.querySelector("button"),
$circle = d.querySelector(".circle"),
$circleDiv = d.querySelector(".circle-div"),
$text = d.querySelector(".text"),
$poem = d.querySelector(".text p")


$startBtn.addEventListener("click", e => {

    setTimeout(() => $startBtn.classList.add("invisible"), 300);

    /*Animación*/

    setTimeout(() => $circle.classList.remove("invisible"), 1000);

    setTimeout(() => $circle.classList.add("animation1"), 2000);

    setTimeout(() => $circle.classList.remove("animation1"), 3000);

    setTimeout(() => {
        $circleDiv.classList.add("circle-div-bigger")
        $circle.classList.add("animation2")}
        , 4000
    );

    setTimeout(() => $circle.classList.add("circle-div-animation1"), 5000);
    setTimeout(() => $circle.classList.add("circle-div-animation2"), 6000);

    setTimeout(() => $text.classList.remove("no-visible"), 6500);
    
    setTimeout(() => $poem.classList.add("no-visible"), 17500);
    setTimeout(() => $poem.textContent = "El amor es ver cómo tu mundo se llena de colores, sintiendo algo más allá de la paleta monocromática que llamamos 'rutina'.", 18000);
    setTimeout(() => $poem.classList.remove("no-visible"), 18500);

    setTimeout(() => $poem.classList.add("no-visible"), 28500);
    setTimeout(() => $poem.textContent = "El amor es perderte en un mundo de sueños, de fantasía y de felicidad. Es tener un lugar seguro al que llegar cuando todo se está derrumbando.", 29000);
    setTimeout(() => $poem.classList.remove("no-visible"), 29500);

    setTimeout(() => $poem.classList.add("no-visible"), 39500);
    setTimeout(() => $poem.textContent = "El amor es tristeza, pero no una tristeza perpetua, sino una tristeza frágil y efímera, que nos permite entender la belleza de la vida.", 40000);
    setTimeout(() => $poem.classList.remove("no-visible"), 40500);

    setTimeout(() => $poem.classList.add("no-visible"), 49500);
    setTimeout(() => $poem.textContent = "El amor es imposible de definir, pero hermoso de sentir.", 50000);
    setTimeout(() => $poem.classList.remove("no-visible"), 50500);

    setTimeout(() => $poem.classList.add("no-visible"), 56500);
    setTimeout(() => $poem.textContent = "El amor es vida, el amor es ternura.", 57000);
    setTimeout(() => $poem.classList.remove("no-visible"), 57500);

    setTimeout(() => $poem.classList.add("no-visible"), 62500);
    setTimeout(() => $poem.textContent = "Pero hay algo que no es amor, y es quedarte aquí sentado leyendo ésto, así que...", 63000);
    setTimeout(() => $poem.classList.remove("no-visible"), 63500);

    setTimeout(() => {
        $poem.classList.add("no-visible")
        $circle.classList.add("disappear")
    }
        , 69500);
    setTimeout(() => $poem.textContent = "Ve y busca tu amor.", 71000);
    setTimeout(() => $poem.classList.remove("no-visible"), 71500);
})

