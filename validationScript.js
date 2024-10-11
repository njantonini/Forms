
let inputElement = document.getElementById('inputField');
document.getElementById('myForm').addEventListener('submit', function(event){
                                                                var regex = /^[A-Za-z0-9]*$/;
                                                                var result = regex.test(inputElement.value);
                                                                if (result == false){
                                                                  alert('Input is not alphanumeric!');
                                                                  event.preventDefault();
                                                                }else{
                                                                  alert('Input is valid');
                                                                }
                                                              })

      
  

