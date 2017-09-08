/*MODULE P4

console.log('Loaded!');


    //Change the text of the main-text div
    var element = document.getElementById('mainElement');
    
    element.innerHTML = 'Hello, Changed from inside main.js' ;
    
    //MOVE the Image
    var img = document.getElementById('madi');
    var marginLeft = 0 ;
    function moveRight()
    {
        marginLeft = marginLeft + 1 ;
        img.style.marginLeft = marginLeft + 'px' ;
    }
    img.onclick = function() {
        var interval = setInterval(moveRight , 10) ;
        };
  */ 
  
  //counter Code
  var button = document.getElementById('counter');
  var counter = 0 ;
  button.onclick = function()
  {
      //Make a request to the counter
      
      //Capture the response ans store in a variable
      
      //Render the variable in the correct span 
      counter = counter + 1 ;
      var span = document.getElementById('count') ;
      span.innerHTML = counter.toString() ;
  }