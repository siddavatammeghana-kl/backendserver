import expree from"express";
import "as userService from"../controller/userService.js";
const router=express.Router();
router.post("/register", async(req,res)=>{
    res.json(await userService.registerUser(req.body));
});
export default router;
