var firstNameElement = document.getElementById('fname');
                  var opinionElement = document.getElementById('opinion');
                  var scoreElement = document.getElementById('score');
            
                  var firstName;
                  var opinion;
                  var score;
            
                  document.getElementById('add').onclick = function () {
                    firstName = firstNameElement.value;
                    opinion = opinionElement.value;
                    score = parseFloat(scoreElement.value);
                    if (!isValidForm()) return;
            
                    var row = `
                        <div class="box">
                            <div class="first-name">${firstName}</div>
                            <div class="opinion">${opinion}</div>
                            <div class="score center">${score}</div>
                        </div>
                    `;
                    var tableBody = document.getElementById('table-body');
            
                    tableBody.innerHTML += row;
            
                    firstNameElement.value = '';
                    opinionElement.value = '';
                    scoreElement.value = '';
            
                    firstNameElement.focus();
                  };
            
                  let isValidForm = function () {
                    let result = true;
                    var invalidElements = document.querySelectorAll(
                      '.form-wrapper .invalid'
                    );
                    console.log(invalidElements);
            
                    for(var i = 0; i < invalidElements.length; i++){
                        invalidElements[i].innerHTML = '';
                    }
            
                    if (firstName === '') {
                      firstNameElement.nextElementSibling.innerHTML = 'الزامی';
                      result = false;
                    }
                    if (opinion === '') {
                      document.querySelector('#opinion + .invalid').innerHTML = 'الزامی';
                      result = false;
                    }
                    
                    if (isNaN(score)) {
                      document.querySelector('#score + .invalid').innerHTML =
                        'ورودی اشتباه است';
                      result = false;
                    } else if (score < 0 || score > 100) {
                      document.querySelector('#score + .invalid').innerHTML =
                        'لطفا امتیاز بین عدد 0 تا 100 وارد کنید';
                      result = false;
                    }
                    return result;
                  };