const express=require("express");
const routes=express.Router();

const { imageUpload } =require( "../controllers/uploadfile");

routes.post('/uploadImage',imageUpload);

module.exports=routes;