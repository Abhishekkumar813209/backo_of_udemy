import express from "express"
import {
    register,
    login,
    logout,
    getMyProfile,
    changePassword,
    forgetPassword,
    resetPassword,
    addToPlaylist,
    removeFromPlaylist,
    // admin routes
    getAllUsers
} from "../controllers/userController.js"
import singleUpload from "../middlewares/multer.js";
import {authorizeAdmin, isAuthenticated} from "../middlewares/auth.js"
const router = express.Router();

//Register Route
router.route("/register").post(singleUpload,register);

//Login Route
router.route("/login").post(login);

//Logout Route
router.route("/logout").get(logout)

//Get my profile 
router.route("/me").get(isAuthenticated,getMyProfile);

//ChangePassword 
router.route("/changepassword").put(isAuthenticated,changePassword);

//ForgotPassword
router.route("/forgetpassword").post(forgetPassword);

//Reset Password 
router.route("/resetpassword/:token").put(resetPassword);

//Add to playlist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);

//Remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);

//Admin Routes
router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers)

router.route("/admin/user/:id")


export default router;