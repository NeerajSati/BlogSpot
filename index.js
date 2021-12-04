const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname,"/images")));

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    }, filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
})
const upload = multer({storage: storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})
const PORT = process.env.port || 5000;
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);

app.use(express.static(path.join(__dirname,"/client/build")))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"/client/build","index.html"))
})
app.listen(PORT, () => {
    console.log('Backend hurray');
});

