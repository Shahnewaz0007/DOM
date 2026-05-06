//parent node
const mainContainer=document.getElementById('main-container');
console.log(mainContainer);

//child node
const placeSection=document.createElement('section');

//create h1 and set innerText
const h1=document.createElement('h1');
h1.innerText='This is a new place section';

//append h1 to placeSection
placeSection.appendChild(h1);

const ul=document.createElement('ul');

const li1=document.createElement('li');
li1.innerText='Bandarban';
ul.appendChild(li1);
placeSection.appendChild(ul);

const li2=document.createElement('li');
li2.innerText='Rangamati';
ul.appendChild(li2);
placeSection.appendChild(ul);

//append placeSection to mainContainer
mainContainer.appendChild(placeSection);


//easier way to append element to the parent node
const bookSection=document.createElement('section');
bookSection.innerHTML=`
    <h1>This is a new book section</h1>
    <ul>
        <li>Book 1</li>
        <li>Book 2</li>
    </ul>
    
`;

mainContainer.appendChild(bookSection);