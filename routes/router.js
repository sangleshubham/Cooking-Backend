import { Router } from "express";
import {getHomepage} from '../controllers/cookingController.js'

const router = Router()

/**
 * @type GET
 * @route /
 * @desc get homepage json
 */
router.get('/' , getHomepage)


/**
 * @type GET
 * @route /
 * @desc get homepage json
 */
 router.get('/' , getHomepage)



/**
 * Exports
 */
export default router