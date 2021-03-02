import express from 'express';

const port = 3000;

console.log(`server is listening on http://localhost:${port}`);

const router = express.Router();

router.get('/', (_, res) => {
  res.json('The sedulous hyena ate the antelope!');
});

export default router;
