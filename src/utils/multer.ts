import e from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req: e.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
    req.fileErr = "invalid file. only image files are allowed";
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

export default upload;
