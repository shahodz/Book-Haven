import{book,books} from './arrayOfBooks.js';


let b = JSON.parse(localStorage.getItem("book_items"));
console.log(b);
console.log(books);



function displaySearchResults() {
  const resultsContainer = document.getElementById("result");
  resultsContainer.innerHTML = ""; // Clear previous search results


  b.forEach(book => {
      let i = b.indexOf(book);
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");
      console.log(i);

      // Create HTML markup for each book
      bookElement.innerHTML = `
          <a href="booktemp.html?book=${i}"><img src="${book.image}" width="170" height="240" alt="${book.name}"></a>
          <br>
          <h2>${book.name} <small><br>by ${book.author}</small></h2>
          <br>
          <p>${book.description}</p>
          <br>
      `;

      if(book.available){
        const borrowbtn = document.createElement("button");
      borrowbtn.textContent = "Borrow";

      bookElement.appendChild(borrowbtn);

      borrowbtn.addEventListener("click",()=>{
        showAlert(book);
      })
      }
      else{
        const none = document.createElement("p");
        none.textContent = "unavailable";
        none.style.color = "red";
        bookElement.appendChild(none);
      }
      resultsContainer.appendChild(bookElement);
  });
}

displaySearchResults();




// function showAlert(book){

//   let i = indexOf(book);
//   if(b[i].available){
//     alert("The book was successfully borrowed for two weeks");
//   }
//   else{
//     alert("Unfortunately, book is unavailble at the moment");
//   }

// }

// Function to handle search
// function searchBooks(query) {
//   query = query.toLowerCase();

//   // Filter books based on the query
//   console.log(book_array);
//   console.log(book_array.author);
//   const searchResults = book_array.filter(book =>{
//     if (book && book.title && book.author && book.category) {
//       // Convert properties to lowercase and check for query match
//       return (
//         book.title.toLowerCase().includes(query) ||
//         book.author.toLowerCase().includes(query) ||
//         book.category.toLowerCase().includes(query)
//       );
//     }
//     return false;
//   });

//   // Display search results
//   displaySearchResults(searchResults);
// }



// Event listener for search input
// const searchInput = document.getElementById("bar");
// searchInput.addEventListener("input", function() {
//   const query = this.value.trim(); 
//   searchBooks(query);
// });

// Initial display of all books


// function display(){
//   const resultscontainer = document.getElementById('result');

//   books.forEach(book => {
//     const bookElement = document.createElement('div');
//     bookElement.classList.add('book');

//     // const meh = document.createElement('a');
//     // meh.href = "file of view books";
    
//     const imageElement = document.createElement('img');
//     imageElement.src = book.image;
//     imageElement.alt = book.name;
//     imageElement.style.width = '170px';
//     imageElement.style.height = '240px';

//     // meh.appendChild(imageElement);

    
//     const titleElement = document.createElement('p');
//     titleElement.textContent = book.name + ' by ' + book.author;
//     titleElement.style.fontSize = '10px';

//     const desriptionElement = document.createElement('p');
//     desriptionElement.textContent = book.description;

//     bookElement.appendChild(imageElement);
//     bookElement.appendChild(titleElement);
//     bookElement.appendChild(desriptionElement);

//     resultscontainer.appendChild(bookElement);
//   })
// }

// display();
