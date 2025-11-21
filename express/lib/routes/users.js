const express = require('express');
const {users}= require("../data/users.json");
const router = express();

router.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        data: users
    })
})

router.get('/:Id',(req,res)=>{
    const {Id}= req.params;
    const user = users.find((each)=> String(each.id) === String(Id) )
    if(!user){
        res.status(404).json({
            success:false,
            message: 'user not found'
        });
    }
    res.status(200).json({
        success: true,
        data: user
    })
})

router.post('/', (req, res) => {
  const { name, email, phone, role } = req.body;
  if (!name || !email || !phone || !role) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    return res.status(409).json({ message: 'Email already exists' });
  }
  
  if(phone.length!=
    10) return res.status(400).json({message: 'Phone number should be of 10 digits.'})
  const phoneExists = users.some(user => user.phone === phone);
  if (phoneExists) {
    return res.status(409).json({ message: 'Phone number already exists' });
  }
  
  const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
  const newId = maxId + 1;
  const membershipDate = new Date().toISOString().split('T')[0];
  
  const newUser = {
    id: newId,
    name,
    email,
    phone,
    role,
    membershipDate,
    isActive: true,
    issuedBooks: []
  };
  users.push(newUser);

  res.status(201).json({
    message: 'User created successfully',
    data: newUser
  });
});

router.put('/:Id',(req,res)=>{
    const {Id}=req.params;
    const userIndex = users.findIndex(each => String(each.id) === String(Id));
    if (userIndex === -1) {
      return res.status(404).json({success: false, message: "User not found"});
    }

    const updateData = req.body;

    emailExists = users.some((user,idx) => user.email === updateData.email && idx !== userIndex);
    if (emailExists) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    phoneExists = users.some((user,idx) => user.phone === updateData.phone && idx !== userIndex);
    if (phoneExists) {
      return res.status(409).json({ message: 'Phone number already exists' });
    }else if (updateData.phone && (updateData.phone.length)!=10) {
      return res.status(400).json({message: 'Phone number should be of 10 digits.'})
    }

    users[userIndex]={...users[userIndex],...updateData};
    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: users[userIndex]
    });

});


router.delete('/', (req, res) => {
  const Id  = req.body.id;
  const userIndex = users.findIndex(each => String(each.id) === String(Id));

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const user = users[userIndex];

  // Check for any issued books not returned (returnDate === null)
  const hasOutstandingBooks = user.issuedBooks && user.issuedBooks.some(book => book.returnDate === null);

  if (hasOutstandingBooks) {
    return res.status(400).json({
      success: false,
      message: "User cannot be deleted: has outstanding issued books"
    });
  }

  // Safe to delete user
  users.splice(userIndex, 1);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
});


module.exports = router;