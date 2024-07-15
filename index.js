const express=require('express');
const app=express();
const cors = require('cors');

require('dotenv').config();
const fileupload = require("express-fileupload");

app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.use(express.json());

const PORT=process.env.PORT || 4000;

const routes = require("./routes/route");
app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})