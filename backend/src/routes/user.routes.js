import { Router } from 'express'; // router is a tool to get user from the express
import { registerUser } from '../controllers/user.controller.js'; 

const router = Router();

router.route('/register').post(registerUser); // when a post request is made to /register, call the registerUser function
export default router;