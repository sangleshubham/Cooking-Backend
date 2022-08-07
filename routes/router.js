import { Router } from "express";
import {getHomepage , insertDummyData, getCategories, getRecipe} from '../controllers/cookingController.js'

const router = Router()

/**
 * @type GET
 * @route /
 * @desc get homepage json
 */
router.get('/getCategoriesHomepage' , getHomepage)


/**
 * @type GET
 * @route /generateDummyCategory
 * @desc generate Dummy data for category
 */
 router.get('/generateDummyCategory' , insertDummyData)

/**
 * @type GET
 * @route /getCategories
 * @desc generate Dummy data for category
 */
 router.get('/getCategories' , getCategories)


 /**
 * @type GET
 * @route /getRecipe
 * @desc generate Dummy data for category
 */
  router.get('/getRecipe/:id' , getRecipe)

 



/**
 * Exports
 */
export default router