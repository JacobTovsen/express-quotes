let quotes = [
    {text: `I'm a quote!`, author: `Jake` },
    {text: `I'm another quote!`, author: `Jake T`}
];

// let quotes = [`I'm a quote!`, `I'm another quote!`]

const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ));

const port = 5000;
app.listen( port, function(){
    console.log( `listening on port ${port}`)
}); //server up!

//get route
app.get( '/quotes', ( req, res )=>{
    console.log( 'in GET hit for /quotes route' );
    res.send( quotes );
}); //end quotes GET

// //post route for stretch goal
// app.post( '/quotes', (req, res)=>{
//     console.log( 'in POST hit for /quotes route:', req.body );
//     quotes.push( req.body.name );
//     res.sendStatus(200);
// })


