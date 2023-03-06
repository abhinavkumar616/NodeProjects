const express=require("express")


const upload=require("../middleware/multer")
const router =express.Router()

const postDocController = require("../controllers/postDocController")

router.post("/doc",upload.single("signature"),postDocController)


module.exports=router