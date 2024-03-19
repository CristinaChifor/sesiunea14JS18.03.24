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
console.log(allTodos[0].textContent);
console.log(allTodos[0].innerText);

// Manipulate the DOM

// manipularea unui element
// textContent și innerHTML:
// Aceste proprietăți permit accesarea și modificarea conținutului text al unui element. textContent returnează sau setează doar textul, în timp ce innerHTML permite lucrul cu conținut HTML.
 
const p = document.querySelector('p');
p.textContent = 'This was added with JS';

const footer = document.querySelector('footer');
const author ='John Doe';
footer.innerHTML = '<strong>Author: </strong><span>John Doe</span>';
footer.innerHTML = `<strong>Author: </strong><span> ${author}</span>`;

const posts = [
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: "my comment",
        title: 'card 1'
    },
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: "my comment",
        title: 'card 2'
    },
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: "my comment",
        title: 'card 3'
    }
];

const body = document.querySelector('body');
let htmlContent = '';
for (const post of posts) {
    const article = document.createElement('article');
   article.classList.add('card');
    const card = `
                    <p>${post.title}</p>
    
                    <ol>
                    
                      ${post.todos.map((el) => '<li class="todo-item">' + el + '</li>')}
                    </ol>
                    <label for="comment">Comment</label>
                    <input type="text" id="comment" name="comment" value="${post.comment}>
                    <footer>
                    <strong>Author</strong> ${post.author} <span></span>
                    </footer>
                    `;

    article.innerHTML = card;
    const comm = article.querySelector('input');
comm.addEventListener('keydown', (event) => {
console.log('event: ', event);
});

    body.appendChild(article);
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
firstP.innerText = 'asdbgf';
console.log(firstP.innerText);

const firstInput = document.querySelectorAll('input');
console.log(`input: `, firstInput);
console.log(`....`);


// getAttribute & setAttribute
firstInput[0].readOnly = true;

firstInput[1].setAttribute('readonly', true);

let firstInputValue = firstInput[0].getAttribute('value');
console.log('firstValue = ', firstInputValue);

// Manipulare clase CSS
// classList
//classList: Această proprietate este utilă pentru a lucra cu clasele CSS ale unui element. Permite adăugarea, eliminarea sau verificarea claselor.

const allP = document.querySelectorAll('p');
for (const paragraph of allP) {
    paragraph.classList.add('red', 'underline');
}

let index = 0;

for(const paragraph of allP) {
    if (index %2 > 0) {
        paragraph.classList.remove('red');
    }
    index++;
}

// Manipulare clase CSS: Style

for(const paragraph of allP) {
    paragraph.style.textTransform = 'uppercase';
}

// Create HTML element
// document.createElement() este folosit pentru a crea un element nou.
//  Acest element este creat, dar nu este încă atașat la nici o parte a DOM-ului.

const newParagraph = document.createElement('p');
newParagraph.textContent = "My new paragraph";
console.log(newParagraph);
 
body.appendChild(newParagraph);

const span = document.createElement('span');
span.textContent = ' altceva';
span.classList.add('red');
newParagraph.appendChild(span);

// stergere element

const allCards = document.querySelectorAll('card');
allCards[allCards.length - 1].remove();

// Event listeners
// Event listeners (ascultători de evenimente) sunt funcții care sunt atașate la elemente HTML și care sunt declanșate în momentul în care un anumit eveniment are loc asupra acelui element.
// Aceste evenimente pot fi, de exemplu, un clic pe un buton, o tastare apăsată, sau orice altă interacțiune cu utilizatorul.

const interactive = document.getElementById('interactive-text');

const onClick = () => {
    if(interactive.classList.contains('red')) {
        interactive.classList.remove('red');
    }
    else {
        interactive.classList.add('red');
    }   
}

interactive.addEventListener('click', onClick);

