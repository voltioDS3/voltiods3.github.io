

console.log(window.innerHeight)


function elementVisible(element){
    let elementBox = element.getBoundingClientRect();
    let deltaDistance = -200;
    // console.log(elementBox.top - window.innerHeight)
    if(elementBox.top - window.innerHeight < deltaDistance){

        return true;
    } else if(elementBox.top - window.innerHeight > deltaDistance){
        return false;
    }
}

function documentScanner(){
    let listSection = document.querySelectorAll('.fade-in');
    let fadedSection = document.querySelectorAll('.faded')
    listSection.forEach(function(section){
        if(elementVisible(section)){
            section.classList.remove('fade-in');
            section.classList.add('faded');
        } 
    });
    fadedSection.forEach(function(section){
        if(!elementVisible(section)){
            section.classList.add('fade-in');
            section.classList.remove('faded');
        }

    })
};

document.addEventListener('scroll', documentScanner)