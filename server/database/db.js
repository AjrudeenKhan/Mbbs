import mongoose from "mongoose";
const Connection = async (username,password) =>{ 
      const URL = `mongodb+srv://${username}:${password}@winterintake.1akhk.mongodb.net/?retryWrites=true&w=majority&appName=winterintake`
    try {
        await mongoose.connect(URL);
    
        console.log("Database connected sucessfully")

    } catch(error){
        console.log("Error while connecting with the database",error.message)

    }
}

export default Connection