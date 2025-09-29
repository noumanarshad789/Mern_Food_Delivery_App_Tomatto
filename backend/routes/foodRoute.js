import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"


const foodRouter = express.Router();

// foodRouter.post("/add", addFood)

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


foodRouter.post("/add", upload.single("image"), addFood)

// Get food list
foodRouter.get("/list", listFood)


// Remove food item
foodRouter.post("/remove", removeFood)






export default foodRouter