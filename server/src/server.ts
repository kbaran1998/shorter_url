import express from "express";


const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});

const router = express.Router();

router.get("/", (_, res) => {
  res.json({"msg":"The sedulous hyena ate the antelope!"});
});

export const serverRoutes = router;
export const server = app;
