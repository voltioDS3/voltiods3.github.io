let firstSlideDiv = document.getElementById("1");
var done = true
function changeText(){
    let triggerLine = document.getElementById("3").getBoundingClientRect().top;
    let deltaDistance = -200;
    console.log(triggerLine - window.innerHeight);
    console.log(done);
    if(triggerLine - window.innerHeight < deltaDistance && done){
        firstSlideDiv.innerHTML = `<h1>Intereses y habilidades</h1>`;
         done = false
    } else if (triggerLine - window.innerHeight > deltaDistance && !done ){
        firstSlideDiv.innerHTML = `
        <h1 >Hola, soy Already_<span class="dinamic-type-1"></span></h1>
        <p>Mi nombre real es Martin Munoz Univaso, actualmente soy alumno de 4to medio del instituto ohiggins, Rancagua. el proposito de esto es que me conozcan un poco.</p>
        <img src="./photos/scroll-bottom.svg" id="scroll-down" >
        `;
        done = true;
        document.addEventListener('scroll', changeText)

    var typed = new Typed(".dinamic-type-1",
    {strings: ['Dev', 'Printed', 'Dead'],
typeSpeed:110,
backSpeed: 110,
startDelay:500,
smartBackspace: false,
loop: true});
        console.log("done");
    }
}

document.addEventListener('scroll', changeText)


setTimeout(function(){
    var typed = new Typed(".dinamic-type-2",
    {strings: ['El futuro Ingeniero', 'Maker', 'Car Enthusiast', 'Gamer', 'Math Lover'],
typeSpeed:90,
backSpeed: 90,
startDelay:500,
smartBackspace: false,
loop: true})},2000);

setTimeout(function(){
    var typed = new Typed(".dinamic-type-3",
    {strings: ['Python', 'JavaScript', 'HTML/CSS', 'Fusion360', 'Photoshop', "Premiere Pro", 'AfterEffects'],
typeSpeed:90,
backSpeed: 90,
startDelay:500,
smartBackspace: false,
loop: true})},2000);


