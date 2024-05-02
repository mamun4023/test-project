import {Router} from 'express'
const router = Router();
const controller = require('../controllers/analyzer')

router.post('/',controller.add)

module.exports = router;