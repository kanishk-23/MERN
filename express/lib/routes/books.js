const express = require('express');
const {books}= require("../data/books.json");
const router = express();

router.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        data: books
    })
})

router.get('/:Id',(req,res)=>{
    const {Id}= req.params;
    const book = books.find((each)=> String(each.id) === String(Id) )
    if(!book){
        res.status(404).json({
            success:false,
            message: "book not found"
        });
    }
    res.status(200).json({
        success: true,
        data: book
    })
})

router.post('/', (req, res) => {
  const { title, author, isbn, year, copies  } = req.body;
  if (!title || !author || !isbn || !year || !copies ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  const titleExists = books.some(book => book.title === title);
  if (titleExists) {
    return res.status(409).json({ message: 'title already exists' });
  }

  const isbnExists = books.some(book => book.isbn === isbn);
  if (isbnExists) {
    return res.status(409).json({ message: 'isbn already exists' });
  }
  
//   if(phone.length!=
//     10) return res.status(400).json({message: 'Phone number should be of 10 digits.'})
//   const phoneExists = users.some(user => user.phone === phone);
//   if (phoneExists) {
//     return res.status(409).json({ message: 'Phone number already exists' });
//   }
  
  const maxId = books.length > 0 ? Math.max(...books.map(u => u.id)) : 0;
  const newId = maxId + 1;
  const newbook = {
    id: newId,
    title,
    author, 
    isbn, 
    year, 
    copies
  };

  books.push(newbook);

  res.status(201).json({
    message: 'book entered successfully',
    data: newbook
  });
});

router.put('/:Id',(req,res)=>{
    const {Id}=req.params;
    const bookIndex = books.findIndex(each => String(each.id) === String(Id));
    if (bookIndex === -1) {
      return res.status(404).json({success: false, message: "book not found"});
    }
    const updateData = req.body;

    isbnExists = books.some((book,idx) => book.isbn === updateData.isbn && idx !== bookIndex);
    if (isbnExists) {
      return res.status(409).json({ message: 'ISBN number already exists' });
    }

    books[bookIndex]={...books[bookIndex],...updateData};
    res.status(200).json({
        success: true,
        message: "book updated successfully",
        data: books[bookIndex]
    });

});


router.delete('/', (req, res) => {
  const Id  = req.body.id;
  const bookIndex = books.findIndex(each => String(each.id) === String(Id));

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "book not found"
    });
  }

  const book = books[bookIndex];

//   // Check for any issued books not returned (returnDate === null)
//   const hasOutstandingBooks = book.issuedBooks && book.issuedBooks.some(book => book.returnDate === null);

//   if (hasOutstandingBooks) {
//     return res.status(400).json({
//       success: false,
//       message: "User cannot be deleted: has outstanding issued books"
//     });
//   }

  // Safe to delete book
  books.splice(bookIndex, 1);

  return res.status(200).json({
    success: true,
    message: "book deleted successfully"
  });
});


module.exports = router;