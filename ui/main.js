console.log('Loaded!');


    //Change the text of the main-text div
    var element = document.getElementById('mainElement');
    
    element.innerHTML = 'Hello, Changed from inside main.js' ;
    
    //MOVE the Image
    var img = document.getElementById('madi');
    var marginLeft = 0 ;
    function moveRight()
    {
        marginLeft = marginLeft + 10 ;
        img.style.marginLeft = marginLeft + 'px' ;
    }
    img.onclick = function() {
        var interval = setInterval(moveRight , 100) ;
        };
    