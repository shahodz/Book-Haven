import { book, books } from './arrayOfBooks.js';
let b = JSON.parse(localStorage.getItem("book_items"));
//------------Check-----------------
//console.log('loaded' ,books[0].genre);

// let array = books;

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
    cardTitle.style.color ='#31220f' ;

    const cardauthor = document.createElement('h2');
    cardauthor.className = book.name;
    cardauthor.textContent = "by:  " + book.author;
    cardauthor.style.color ='#31220f' ;
    
    cardContent.appendChild(cardTitle);
    // cardContent.appendChild(cardText);
    card.appendChild(link);
    card.appendChild(cardContent);

    card.style.cssText='\
    height: 500px;\
    width : 250px; \
    display: flex;\
    // flex-wrap: nowrap;\
    // gap: 10px;\
    padding: 0px;\
    margin: 0px;\
    box-shadow: 1px 1px 20px ;\
    border-radius:10px;\
    overflow:hidden;\
    ';
    card.appendChild(cardauthor)
    cardContent.style.cssText='\
    padding: 0px;\
    margin:0px;\
    ';
    card.style.display= 'inline';
    card.style.margin = '15px';
    
    cardImage.style.width = '100%'; 
    cardImage.style.objectFit = 'cover';
    cardImage.style.hight = '200px';
    cardImage.style.transform = 'scale(1)';
    
    cardContent.style.padding = '8px';
    cardContent.style.fontSize = '16px';
    cardContent.style.paddingLeft = '5px';
    
    cardauthor.style.fontSize = '17px';
    cardauthor.style.paddingLeft = '20px';

    // let buttonn = document.getElementById("borrowBtn");
    
    if(book.name.length > 22 )
        cardContent.style.fontSize = '12px';
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
    //     background-color: rgb(29, 97, 84);          \
    //     color: #f8f4ef;                     \
    //     font-weight: 600;                   \
    //     font-size: 17px;                    \
    //     cursor: pointer;                    \
    //     position: relative;                 \
    //     bottom: 5px;                       \
    //     left: 120px;                         \
    //     z-index:10;                          \
    //     width:100px';
        
    //     card.appendChild(borrow)
    //     // Event delegation for dynamically created buttons
    //     document.body.addEventListener("click", function(event) {
    //     if (event.target.classList.contains("borrowBtn")) {
    //         showAlert();
    //     }});
    }
    else{
        card.style.borderBottom = '10px solid red';
    }
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
        // categoryTitle.style.border='2px';
        categoryTitle.style.backgroundColor='rgb(29, 97, 84, 0.9)';
        // categoryTitle.style.borderRadius='10px';
        categoryTitle.style.padding='10px';
        categoryTitle.style.color=' #f8f4ef ';

        createCategory.appendChild(categoryTitle);
        grid.appendChild(createCategory);
        // create a row for each category
        
        // create a card for each book
        // for (let j = 0; j < array.length; j++) {
        //     if (categories[i] === array[j].genre ){
        //         row.appendChild(createbook(books[j]));
        //     }
        // }
        for (let j = 0; j < b.length; j++) {
            for(let k=0;k<7;k++){
                if (categories[i] === b[j].genre ){
                    row.appendChild(createbook(books[j]));
                }
            }
        }
        // some styling to make the grid look better
        row.style.cssText='\
        width: 100%;\
        height: 580px;\
        display: flex;\
        flex-wrap: wrap;\
        overflow-x: scroll;\
        flex-direction: column;\
        // padding: 10px;\
        justify-content:space-evenly;\
        align-items:space-evenly;\
        ';
        
        grid.appendChild(row);
        grid.style.cssText='\
        flex-direction: column;\
        flex-wrap: nowrap;\
        display: flex;\
        // margin: 15px;\
        margin-top: 20px;\
        margin-bottom: 40px;\
        box-shadow: -10px 15px 10px #31220f91;   \
        padding-top:10px;\
        border-radius:10px;\
        overfow:hidden;\
        ';

        document.body.appendChild(grid);

    }        

    }

createGrid();