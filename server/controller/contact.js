import Contact from "../models/contact_module.js";

export const contactController = async (req, res) => {
    try {
        const user = req.body;
         const newUser = new Contact(user);
         await newUser.save();
        console.log("Request Body:", req.body); 
        res.status(200).json({ message: "Data received successfully!" });
    } catch (error) {
        console.error("Error while processing the contact request:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};
