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
console.log(allTodos[0].textContent);
console.log(allTodos[0].innerText);

// Manipulate the DOM

// Manipularea unui element

//textContent și innerHTML: Aceste proprietăți permit accesarea și modificarea conținutului text al unui element.
// textContent returnează sau setează doar textul, în timp ce 
// innerHTML permite lucrul cu conținut HTML.

const p = document.querySelector('p');
p.textContent = 'This was added with JS';

const footer = document.querySelector('footer');
const author = 'John Doe'
//footer.innerHTML = '<strong>Author: </strong><span>John Doe</span>';
footer.innerHTML = `<strong>Author: </strong><span>${author}</span>`;

const posts = [
{
        autor: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'my comment',
        title: 'card 1'
    },

    {
        autor: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'my comment',
        title: 'card 2'
    },

    {
        autor: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'my comment',
        title: 'card 3'
    }
];

const body = document.querySelector('body');
let htmlContent = '';
for (const post of posts) {
    const card = `<article class="card">
    <p>${post.title}</p>

    <ol>
    
        ${post.todos.map((el) => '<li class="todo-item">' + el +'</li>')}
    </ol>

    <label for="comment">Comment</label>
    <input type="text" id="comment" name="comment" value="${post.comment}">
    <footer></footer>
    
</article>`

htmlContent += card;
}

body.innerHTML = htmlContent;
//body.textContent = htmlContent;

// innerText vs textContent

const firstP = document.querySelector('p');
console.log(firstP);
console.log(firstP.textContent);
firstP.textContent = "ast";
console.log(firstP.textContent);
console.log(firstP.innerText);
firstP.innerText = 'asgal';
console.log(firstP.innerText);

// getAttribute și setAttribute: 
// Aceste metode permit accesarea și modificarea atributelor unui element.

const firstInput = document.querySelectorAll('input');
console.log('input: ', firstInput);
console.log('...');

firstInput[0].readOnly = true;

firstInput[1].setAttribute('readonly', true);

let firstInputValue = firstInput[0].getAttribute('value');
console.log('First value', firstInputValue);

// classList
//Această proprietate este utilă pentru a lucra cu clasele CSS ale unui element. Permite adăugarea, eliminarea sau verificarea claselor.

const allP = document.querySelectorAll('p');
for(const paragraph of allP) {
    paragraph.classList.add('red', 'underline');
}