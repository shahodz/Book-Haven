//this file doesn't work !!!
//pls don't link it with any other pages

import { book, books } from './arrayOfBooks.js';

let b = JSON.parse(localStorage.getItem("book_items"));
//------------Check-----------------
//console.log('loaded' ,books[0].genre);

let array = books;

//------------Check-----------------

// categories.forEach(category => {
//     array.forEach(b => {
//         if(b.genre === category){
            
//             console.log(b.name, b.genre);
//         }
//     })
// });
//------------Check-----------------

let categories = ["Historical","Romance","Mystery", "Children's Literature","Self Help","Science Fiction"];
let booksOfEachCategory = [
    {historical: []},
    {romance: []},
    {mystery: []},
    {"chichildren's literature": []},
    {"self help": []},
    {"science fiction": []},
];
//------------Check-----------------
// for (let i = 0; i < categories.length; i++) {
//     let k = 0;
//     for (let j = 0; j < array.length; j++) {
//         if (categories[i] === array[j].genre ) {
//             booksOfEachCategory[i][j] = (array[j]);
//             console.log(j, categories[i], booksOfEachCategory[j]);
//         }
//     }
// }
// console.log( categories[2], booksOfEachCategory[2]);

//----------------------------------------
//check 
function showAlert(){
    alert("The book was successfully borrowed for two weeks");
    console.log("here the function called");
}
function createbook(book) {
    // const resultcont = document.getElementById('meh');
    const card = document.createElement('div');
    card.className = 'card';
    let i= books.indexOf(book);
    //console.log(i);
    // card.innerHTML=`
    // <a href="booktemp.html?book=${i}"><img src="${book.image}/></a>
    // `;

    const link = document.createElement('a');
    link.href='booktemp.html?book=' + i;
    const cardImage = document.createElement('img');
    cardImage.src = book.image;
    // cardImage.alt = 'Card image';
    cardImage.className = 'bookImage';
    
    // resultcont.appendChild(card);
    console.log(typeof(i))
    
    link.appendChild(cardImage);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardTitle = document.createElement('h2');
    cardTitle.className = book.name;
    cardTitle.textContent = book.name;
    cardTitle.style.color ='#f8f4ef' ;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardText);

    card.appendChild(link);
    card.appendChild(cardContent);
    card.style.cssText='\
    height: 500px;\
    width : 250px; \
    display: flex;\
    flex-wrap: wrap;\
    gap: 10px;\
    padding: 5px;\
    margin: 10px;\
    ';
    cardImage.style.height = '350px';
    cardImage.style.width = 'border-box'; 
    cardImage.style.transform = 'scale(1)';
    // cardImage.style.objectPosition = 'center';
        cardImage.style.objectFit = 'cover';
        
    card.style.position = 'relative';
    // card.style.margin = '15px';
    
    // cardContent.style.padding = '10px';

    // let buttonn = document.getElementById("borrowBtn");
        
    
    if(book.name.length > 25 )
    cardContent.style.fontSize = '10px';
    // check if the book is available or not
    if(book.available) {
    card.style.borderBottom = '10px solid #7af722';

    // const borrow = document.createElement('button');
    // borrow.textContent = 'Borrow';
    // borrow.className = 'borrowBtn';
    // borrow.id = 'borrowBtn';
    // borrow.style.cssText =
    //     'border:0;                          \
    //     box-shadow: 1px 10px 15px #31220f;   \
    //     border-radius: 10px;                \
    //     padding: 2px;                       \
    //     background-color: #e4c5a1;          \
    //     color: #31220f;                     \
    //     font-weight: 600;                   \
    //     font-size: 17px;                    \
    //     cursor: pointer;                    \
    //     position: relative;                 \
    //     bottom: 5px;                       \
    //     left: 120px;                         \
    //     z-index:10;                          \
    //     width:100px';
        
        card.appendChild(borrow)
        // Event delegation for dynamically created buttons
        document.body.addEventListener("click", function(event) {
        if (event.target.classList.contains("borrowBtn")) {
            showAlert();
        }});
    }
    else{
        card.style.borderBottom = '10px solid red';
    }
    // return card;
    return card;
}



function createGrid() {
    
    for (let i = 0; i < categories.length; i++) {
        const grid = document.createElement('div');
    grid.className = 'grid';
    const row = document.createElement('div'); 
    row.className = 'row';
    const createCategory = document.createElement('div');
        createCategory.className = 'categorycontainer';
        createCategory.textcontent= categories[i];
        const categoryTitle = document.createElement('h1');
        categoryTitle.className = 'categorytitle';
        categoryTitle.textContent = categories[i];
        categoryTitle.style.border='2px';
        categoryTitle.style.backgroundColor='rgb(29, 97, 84)';
        categoryTitle.style.borderRadius='10px';
        categoryTitle.style.padding='10px';
        categoryTitle.style.color=' #f8f4ef ';



        createCategory.appendChild(categoryTitle);
        grid.appendChild(createCategory);
        // create a row for each category
        // create a card for each book
    
    
        for (let j = 0; j < b.length; j++) {
        if (categories[i] === b[j].genre ){
            row.appendChild(createbook(books[j]));
        }}
        // some styling to make the grid look better
        row.style.width = 'fit-content';
        row.style.display = 'flex';
        row.style.height = '450px';
        row.style.cssText='\
        display: flex;\
        flex-wrap:nowrap;\
        flex-direction: row;\
        overflow-x: scroll;\
        // justify-content:space-evenly;\
        // align-items:space-evenly;\
        padding-top:10px;\
        ';
        
        // row.style.justifyContent = 'space-between';
        // row.style.border = '2px solid black';
        // row.style.boxShadow = '2px 2px 10px black';
        grid.appendChild(row);
        grid.style.cssText='\
        flex-direction: column;\
        display: flex;\
        padding: 30px;\
        box-shadow: 10px 5px 20px #31220f;   \
        // justify-content:space-evenly;\
        // align-items:space-evenly;\
        // padding-top:10px;\
        ';

        document.body.appendChild(grid);

    }        

    }

createGrid();