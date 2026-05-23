// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    const server = app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });

    server.on("error", (error) => {
        console.log("ERR: ", error);
        throw error;
    });
})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
})

