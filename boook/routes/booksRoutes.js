const router = require("express").Router(); 
const { request } = require("http");
// const { Router } = require("express");
const booksModel = require("../models/booksModel")


// post request
router.post("/add",async(req,res)=>{
 try {
  const data = req.body;
   const newBook = new booksModel(data);
    await newBook.save()
    .then(()=>{
      res.status(200).json({message:"book added successfully"})
    })
 } catch (error) {
  console.log(error);
  
 }
})

// get request
router.get("/getbooks",async(req,res)=>{
  let books;
  try {
    books = await booksModel.find()
       res.status(200).json({books})
     
  } catch (error) {
   console.log(error);
   
  }
 })


//  get request by id 

router.get("/getbooks/:id",async(req,res)=>{
  let books;
  const id=req.params.id;
  try {
    books = await booksModel.findById(id);
       res.status(200).json({books})
     
  } catch (error) {
   console.log(error);
   
  }
 })


//  update book by id 
router.put("/updatebooks/:id",async(req,res)=>{
  const id=req.params.id;
  const {bookname,description,author,image,price}=req.body
  let book
  try {
    book = await booksModel.findByIdAndUpdate(id,{
      bookname,
      description,
      author,
      image,
      price
    });
    await book.save().then(()=> res.json({message: "data updated"}  ))
     
  } catch (error) {
   console.log(error);
    
  }
 })

//  delete book by id 

router.delete("/deletebook/:id",async(req,res)=>{
  const id=req.params.id;
  try {
    books = await booksModel
    .findByIdAndDelete(id)
       res.status(200).json({books})
    .then(()=>res.status(201).json({message:"deleted successfully"}))
    
     
  } catch (error) {
   console.log(error);
   
  }
 })


module.exports= router;