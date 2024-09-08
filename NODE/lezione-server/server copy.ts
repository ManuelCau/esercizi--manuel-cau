import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets.js";
import multer from "multer";
import { log } from "console";
import { createImage } from "./controllers/planets copy.js";

const app = express();
const port = 3000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, file.originalname);
  },
  filename: (req, file, cb) => {
    cb(null, "./uploads");
  },
});
const upload = multer({ storage });
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

//creare un nuovo pianeta

app.post("/api/planets", create);

//aggiornare un pianeta con PUT

app.put("/api/planets/:id", updateById);

//eliminare con DELETE
app.delete("/api/planets/:id", deleteById);

app.post("/api/planets/:id/image", upload.single("image"), createImage);
console.log(req.file);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
