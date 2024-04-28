class book{
  constructor(name,author,image,description,year,publisher,ISBN,edition,genre,language,available){
    this.name=name;
    this.author=author;
    this.image=image;
    this.description=description;
    this.year=year;
    this.publisher=publisher;
    this.ISBN=ISBN;
    this.edition=edition;
    this.genre=genre;
    this.language=language;
    this.available=available;
  }
}

const books = [
  new book(
      "The Nightingale",
      "kristin hannah",
      "book_covers/historical_3.jpg",
      "Set in France during World War II, 'The Nightingale' tells the story of two sisters, Vianne and Isabelle, who struggle to survive and resist the Nazi occupation in their own ways. As they face unimaginable hardships and make impossible choices, their bond is put to the ultimate test.",
      2015,
      "St. Martin's Press",
      "978-0312577223",
      "First",
      "Historical",
      "English",
      false
  ),
  new book(
    "The Note Book",
    "Nicholas Sparks",
    "book_covers/romance_3.jpg",
    "Set in North Carolina during the 1940s and the present day, 'The Notebook' tells the story of Noah Calhoun and Allie Nelson, two young lovers from different social backgrounds who are separated by circumstances but reunite years later, rediscovering the enduring power of love.",
    1996,
    "Warner Books",
    "978-0446615153",
    "First",
    "Romance",
    "English",
    true
  ),
  new book(
      "Murder of Roger Ackroyd",
      "Agatha Christie",
      "book_covers/mystery_1.jpg",
      "Hercule Poirot, the famous Belgian detective, is called upon to investigate the murder of Roger Ackroyd, a wealthy businessman. As Poirot delves into the lives of the suspects, he uncovers a web of secrets and lies leading to a startling conclusion.",
      1926,
      "William Collins & Sons",
      "978-0062073563",
      "First",
      "Mystery",
      "English",
      true
  ),
  new book(
    "The Chronicles of Narnia:\
    The Lion, The witch and The Wardrobe",
    "c.s. Lewis",
    "book_covers/children_2.jpg",
    "Four siblings discover a magical wardrobe that leads to the land of Narnia, where they embark on a quest to defeat the White Witch and restore peace to the kingdom.",
    1950,
    "Geoffrey Bles",
    "978-0064404990",
    "First",
    "Children's Literature",
    "English",
    false
  ),
  new book(
    "Atomic Habits",
    "James Clear",
    "book_covers/selfhelp_3.jpg",
    "Explores the science of habit formation and provides practical strategies for creating positive habits, breaking bad habits, and mastering the art of continuous improvement.",
    2018,
    "Penguin Random House",
    "978-0735211292",
    "First",
    "Self Help",
    "English",
    false
  ),
  new book(
    "Dune",
    "Frank Herbert",
    "book_covers/sciencefiction_1.jpg",
    "'Dune' is a science fiction masterpiece that takes place in a distant future where noble families vie for control of the desert planet Arrakis, the only source of the valuable spice melange. The story follows Paul Atreides, a young nobleman, as he navigates political intrigue, religious prophecy, and the harsh desert environment.",
    1965,
    "Ace Books",
    "978-0441013593",
    "First",
    "Science Fiction",
    "English",
    true
  )
  
];


localStorage.setItem("book_items", JSON.stringify(books));

export { book, books };