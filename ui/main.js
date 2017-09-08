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
 // var counter = 0 ;
  button.onclick = function()
  {
      //Create a request object
      var request = new XMLHttpRequest() ;
      
      //Capture the response and store in a variable
      request.onreadystatechange = function()
      {
          if(request.readyState === XMLHttpRequest.DONE)
          {
             //Take Some Action
             if(request.status === 200)
             {
                 var counter = request.responseText;
                 var span = document.getElementById('count') ;
                 span.innerHTML = counter.toString() ;
             }
          }
      };
      
      /*
      //Render the variable in the correct span 
      counter = counter + 1 ;
      var span = document.getElementById('count') ;
      span.innerHTML = counter.toString() ;
      */
      
      //Make the request
      request.open('GET' , 'http://aditigoyal.imad.hasura-app.io/counter',true);
      request.send(null);
  };
  
  //Submit name
  var nameInput = document.getElementById('name') ;
  var name = nameInput.value ;
  var submit = document.getElementById('submit_btn');
  
  submit.onclick = function()
  {
      //make a request to server and senf the name
      //capture a list of name and render it as list
  };