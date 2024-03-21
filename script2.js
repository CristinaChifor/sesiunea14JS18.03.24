console.log('hello');

// DOM este o reprezentare a documentului HTML într-o structură de tip arbore, 
// unde fiecare element din document este reprezentat printr-un obiect (nod) în arborele DOM.

// accesarea unui element după valoarea atributului id.

const cardElement = document.getElementById('card');
console.log('card: ', cardElement);
console.log(`card: ${cardElement}`);

//cardElement.innerHTML = "Altceva";

// Accesarea elementelor după valoarea atributului class:

const todos = document.getElementsByClassName('todo-item');
console.log(todos);
todos[0].id = 'new-id';

// Accesarea elementelor după valoarea atributului name:

const comment = document.getElementsByName('comment');
console.log(comment);
comment[0].value = 'Comment predefinit';

// Accesarea elementelor după numele tag-ului

const listItems = document.getElementsByTagName('li');
console.log(listItems);

// Accesarea elementelor după orice selector CSS valid:

const cardParagraph = document.querySelector('#card > p');
console.log(cardParagraph);

// Accesarea tuturor elementelor după orice selector CSS valid:

const allTodos = document.querySelectorAll(' #card > ol > .todo-item');
console.log(allTodos);

// Manipulate the DOM

// Manipularea unui element

//textContent și innerHTML: Aceste proprietăți permit accesarea și modificarea conținutului text al unui element.
// textContent returnează sau setează doar textul, în timp ce 
// innerHTML permite lucrul cu conținut HTML.


