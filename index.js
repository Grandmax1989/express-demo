
const express = require('express');
const app = express();



const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser());


app.get('/users', (req, res) => {

    const  stringJson =  fs.readFileSync('./bd.json', 'UTF-8');

    const data = JSON.parse(stringJson);

    res.status(200).json( data )

});

app.post( '/users', ( req, res ) => {

    console.log(req.body);

    const stringJson = fs.readFileSync( './bd.json', 'UTF-8' );

    const data = JSON.parse( stringJson );

    data.users.push(req.body);

    const newDataString = JSON.stringify(data);

    fs.writeFileSync( './bd.json', newDataString );

    res.json( { code: 200 } );


});



app.listen(3000, () => console.log('Servidor levantado en 3000'));
