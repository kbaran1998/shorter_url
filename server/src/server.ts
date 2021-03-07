import express from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";

const app = express();
const PORT: Number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(helmet());
app.use(express.static(path.join(process.cwd(), 'dist/build')));

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});


app.get("/test", (_, res) => {
  res.json({ "msg": "Works 🐳!" });
});


const router = express.Router();
export const serverRoutes = router;
export const server = app;
