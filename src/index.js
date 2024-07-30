const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log(`Successfully started the server on PORT : ${3000}`);
});
