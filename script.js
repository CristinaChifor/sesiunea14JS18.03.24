console.log(`Hello`);

// accesare elem dupa ID get.ElementById

const cardElement = document.getElementById(`card`);
console.log(`card: `, cardElement);
console.log(`card: ${cardElement}`);

//cardElement.innerHTML = "Altceva";

// accesare elem dupa numele clasei. getElemetByClassName

const todos = document.getElementsByClassName(`todo-item`);
console.log(todos);
todos[0].id= 'new-id';

// accesare elem dupa val atributului name - accsare input-uri

const comment = document.getElementsByName('comment');
console.log(comment);
comment[0].value = 'Comment predefinit';

// accesare elem dupa numele tag-ului

const listItems =  document.getElementsByTagName('li');
console.log(listItems);

// accesarea elementelor după orice selector CSS valid:

const cardParagraph = document.querySelector('#card > p');
console.log(cardParagraph);

// accesarea tuturor elem dupa un selector css valid

const allTodos = document.querySelectorAll('#card > ol > .todo-item');
console.log(allTodos);





