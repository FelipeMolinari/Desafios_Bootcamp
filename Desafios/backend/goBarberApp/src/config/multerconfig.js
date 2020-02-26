import multer from "multer";
import crypto from "crypto";
import { resolve, extname } from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, resolve(__dirname, "..", "..", "tmp", "uploads"));
  },
  filename: (req, file, callbak) => {
    crypto.randomBytes(16, (err, res) => {
      if (err) {
        return callbak(err);
      }
      return callbak(null, res.toString("hex") + extname(file.originalname));
    });
  }
});

export default {
  storage
};
