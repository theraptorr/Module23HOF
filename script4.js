// Sample list of books
const books = [
    { title: 'Book 1', author: 'author 1', year: 2005 },
    { title: 'Book 2', author: 'author 2', year: 2015 },
    { title: 'Book 3', author: 'author 3', year: 2008 },
    // Add more books as needed
  ];
  
  // Filtering and capitalizing
  const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({ ...book, author: book.author.toUpperCase() }));
  
  console.log(filteredBooks);
  