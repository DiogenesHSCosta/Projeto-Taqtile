var { graphql, buildSchema } = require("graphql")

const schema = buildSchema(`
    type Query{
        hello: String
    }
`)

const rootValue ={  
    Query: {
        hello: ()=> {
            return "Hello Word!"
        }
    }
}

graphql({
    schema,
    source: "{ hello }",
    rootValue
}).then((response) =>{
    console.log("Rodando")
})