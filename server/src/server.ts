import express from "express";
import cors from "cors";

const app = express();
const PORT: Number = Number(process.env.PORT) || 3000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});

app.get("/", (_, res) => {
  res.json({ "msg": "Works 🐳!" });
});


const router = express.Router();
export const serverRoutes = router;
export const server = app;
