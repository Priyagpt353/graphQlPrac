import mongoose from "mongoose";

const url = "mongodb+srv://guptapriyaofficial:nbShr70zmDF3j9ar@priyaapi.1rpccrd.mongodb.net/PriyaApi?retryWrites=true&w=majority&appName=PriyaApi0";
async function connectDb() {
    try {
        await mongoose.connect(url);
        console.log("Connection is made sucessfully");
    } catch (error) {
        console.log("Error Occured", error)
    }
}

connectDb();

const widgetSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldOut: String,
    inventory: String,
    sales: Array

})

const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets };