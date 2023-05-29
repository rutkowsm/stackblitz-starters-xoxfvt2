const express = require('express');
const app = express();
const port = 9393;

const App = () => (
  <html lang="pl">
    <head>
      <meta charset="utf-8" />
      <title>buldog</title>
      <meta name="description" content="temlate" />
      <meta name="author" content="SitePoint" />
      <link rel="stylesheet" href="css/styles.css?v=1.0" />
    </head>
    <body>
      <h1>Lorem</h1>
    </body>
  </html>
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
