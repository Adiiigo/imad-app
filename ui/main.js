console.log('Loaded!');


    //Change the text of the main-text div
    var element = document.getElementById('mainElement');
    
    element.innerHTML = 'Hello, Changed from inside main.js' ;
    
    //MOVE the Image
    var img = document.getElementById('madi');
    img.onclick = function(){
        img.style.margintop = '200px' ;
    };
    