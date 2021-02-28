import express from 'express';

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});

const router = express.Router();

router.get('/', (_, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
