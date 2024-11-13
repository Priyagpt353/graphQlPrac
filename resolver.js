import { Widgets } from "./dbConnectors";

// class Product {
//     constructor(id, { name, description, price,inventory, soldOut, sales }) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.inventory = inventory;
//         this.soldOut = soldOut;
//         this.sales = sales;
//     }
// }

// const productDatabase = {};

// const fakeDatabase = {};

const resolver = {
    getProduct: async ({ id }) => {
        try {
            const product = await Widgets.findById(id);
            return product;
        } catch (error) {
            console.log(`Error occured ${error}`)
            throw new Error(err);
        }
    },
    // getProduct: ({id}) =>{
    //     return new Product(id,productDatabase[id])
    // },
    createProduct: async ({ input }) => {
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id] = input;
        // return new Product(id,input);
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            inventory: input.inventory,
            soldOut: input.soldOut,
            sales: input.sales
        });

        newWidget.id = newWidget._id;
        try {
            await newWidget.save();
            return newWidget;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateProduct: async ({ input }) => {
        try {
            const updateWidget = await Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true });
            return updateWidget;
        } catch(error){
            throw new Error(error);
        }
    },
    deleteProduct: async({id}) => {
        try{
            await Widgets.findByIdAndDelete({_id:id});
            return "Widget deleted successfully!!";
        } catch(error){
            throw new Error(error);
        }
    },
    getAllProducts: async () => {
        // try {
        //     await Widgets.find();
        // } catch (error) {
        //     throw new Error(error);
        // }
        return await Widgets.find({});
    }
}


// const root = {
//     product: () => {
//         return {
//             "id": 2972987,
//             "name": "Product 1",
//             "description": "product description 1",
//             "price": 34.09,
//             "soldOut": false,
//             "sales": [
//                 {
//                     "sale": "Delhi"
//                 },
//                 {
//                     "sale": "Lucknow"
//                 }
//             ]
//         }
//     },
// };

export default resolver;