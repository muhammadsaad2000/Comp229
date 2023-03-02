//File Name: app.js, Student Name: Muhammad Saad,
// Student ID: 301077320 
//Web App Name: Comp 229 MidTerm 

import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;