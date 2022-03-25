const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Heroku, RSalehin24!')
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening to the port 8080 ...')
})