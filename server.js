const express = require("express");
const db = require('./db/connections')
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).end();
});

db.connect(err => {
  if(err) throw err;
  console.log('Database connection established');
  app.listen(PORT, () => {
    console.log(`Server is now live on Port: ${PORT}`);
  });
});


