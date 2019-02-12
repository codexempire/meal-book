// importing dependencies
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// creating a port where the app runs
const port = process.env.port || 3000;

// initial express
const app = express();

// use morgan
app.use(morgan('tiny'));

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// listen on the port
app.listen(port, (err) => {
  if (err) console.log(`Failed to run error: ${err}`);
  console.log(`Running on ${port}`);
});

// export the app
export default app;
