import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  colors  from 'colors';
import DbConnection from './Config/db.js';
import Users from './model/users.js';
import Qoutes from './model/Qoutations.js';
import Products from './model/Products.js';
import contact from './model/contact.js';


// Env Configuration
dotenv.config();

// Database Connect Configuration
DbConnection();

// Rest Object 
let app = express();

// Sending data in DB in JSON format
app.use(express.json());
app.use(cors());


// Adding User Data 
app.post('/registration', async(req , res )=>{
    let data = new Users(req.body);
    let result = await data.save();
    res.send(result)
})

// Gettinh user Data
app.get('/getuser', async(req , res )=>{
    let data = await Users.find();
    res.send(data);
})

// Delete User Data
app.delete('/deleteuser/:id', async(req , res)=>{
    let data = await Users.deleteOne({_id:req.params.id});
    res.send(data);
}
)

// Getting User data for update
app.get('/get-updateuser/:id', async(req,res)=>{
    let data = await Users.findOne({_id:req.params.id});
    res.send(data);
});

// Updating the user data

app.put('/updateuser/:id', async(req,res)=>{
    let data = await Users.updateOne(
        {_id:req.params.id},
        {$set:req.body}
        );
    res.send(data);
})


app.post('/addQoute', async(req , res )=>{
    const data = await Qoutes.create(req.body);
    console.log(data);
    // let result = await data.save();
    res.send(data);
})

app.get('/getQoutes', async(req , res )=>{
    let data = await Qoutes.find();
    // console.log(data)
    res.send(data);
})

// Adding Products
app.post('/addproducts', async(req , res )=>{
    let data = new Products(req.body);
    let result = await data.save();
    res.send(result)
})

// Getting Products
app.get('/getproducts', async(req , res )=>{
    let data = await Products.find();
    res.send(data);
})

// Delete Producst
app.delete('/deleteproducts/:id', async(req , res)=>{
    let data = await Products.deleteOne({_id:req.params.id});
    res.send(data);
}
)

// Getting Products for update
app.get('/get-updateproducts/:id', async(req,res)=>{
    let data = await Products.findOne({_id:req.params.id});
    res.send(data);
});

// Updating the user data

app.put('/updateproducts/:id', async(req,res)=>{
    let data = await Products.updateOne(
        {_id:req.params.id},
        {$set:req.body}
        );
    res.send(data);
})

// Contact Details
app.post('/addContact', async(req , res )=>{
    let data = new contact(req.body);
    let result = await data.save();
    res.send(result)
})

// Getting Contact Details
app.get('/getcontacts', async(req , res )=>{
    let data = await contact.find();
    res.send(data);
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server is running on ${port}`.bgGreen);
})
