function pop() { // the function is what we wanna do when we click later on. 
  let textarea = document.getElementById("textarea"); // textarea is the id we give to out html code that we wanna use later on. 
  let value = textarea.value; // the reason why we combine textarea.value is when we type anything in the text area then we shall get that value out. 
  alert(value);
}


/* since we have given our button a function name. 

    function pop() Am telling the button if case what,
    so ever i will be writting over here you must obey and do as i say.
     let is a declaration; then textarea is our variable; then = equal sign is our operator assignment  ;     
     we use DOM to call on specific id,attribute,classes and so on, 
     eg document.getElementById(" insert the name of the id,clases and attribute that you wanna play with,")
     since we want to be able to write some thing on our  textarea input and to expect a result we can give our code 'avalue'
     value is our result that we can get after we type in what we wanna,
      so in the final stage we gonna combine the textarea with the value that we would love to get;
      finally we can involk the code inform of a pop up.  


*/