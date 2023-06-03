import express from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import usersController from '../controllers/users.controller.js';
import intakeusersController from '../controllers/intakeusers.controller.js';

const router =  express.Router();

/* users */
router.get('/users', verifyToken, usersController.get); //ok
router.get('/users/:userId', verifyToken, usersController.getbyid); //ok
router.post('/register', usersController.register); //ok
router.post('/login', usersController.login); //ok
router.delete('/logout', usersController.logout) //ok
//put

/* intakeusers */
router.get('/intakeusers', verifyToken, intakeusersController.get); //ok
router.get('/intakeusers/:intakeUserId', verifyToken, intakeusersController.getbyid); //ok
router.post('/intakeusers/:userId', verifyToken, intakeusersController.create); //ok


// {
//     "username":"rafi",
//     "email":"test@gmail.com",
//     "password":"test",
//     "birthdate":"2002-05-05",
//     "gender":"male",
//     "height":1.0,
//     "weight":1.0,
//     "cholesterol":1,
//     "glucose":1
//   }

export default router;