import expres from "express";

const app= expres()
const port=8081

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/hi", ( req, res ) => {
    res.send( "Hi, I hope you are doing well" );
} );


app.listen(port,()=>{
    console.log("it's alive on localhost")
})