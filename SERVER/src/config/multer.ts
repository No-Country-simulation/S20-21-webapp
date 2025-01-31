import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
      folder: "images",
      format: file.mimetype.split("/")[1],
      public_id: file.originalname.split(".")[0],
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    }),
  });
  
  const upload = multer({ storage });
  
export default upload;
