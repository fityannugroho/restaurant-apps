const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT);

const server = app.listen(app.get('port'), () => {
  console.log(`App is running on port ${server.address().port}`);
});
