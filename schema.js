import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price:Float
        inventory: Int
        soldOut: Soldout
        sales: [Sales]!
    }

    enum Soldout{
        SOLDOUT,
        ONSALE
    }
    
    type Sales {
        sale: String
    }

    type Query { 
        getProduct(id:ID):Product,
        getAllProducts:[Product]
    }
    
    input SalesInput {
        sale: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price:Float
        inventory:Int
        soldOut: Soldout
        sales: [SalesInput]!
    }
    
    type Mutation {
        createProduct(input:ProductInput): Product,
        updateProduct(input:ProductInput):Product,
        deleteProduct(id:ID!):String,
    }

`)

export default schema;