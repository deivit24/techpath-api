const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const careerController = require('../../controllers/career.controller');

const router = express.Router();

router
  .route('/')
  .get(auth(), careerController.getCareerMetrics);


module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Career
 *   description: Career Analyst routes for retrieving career stuff
 */

/**
 * @swagger
 * /career:
 *   get:
 *     summary: Get user career metrics
 *     description: Gets metrics of logged in users
 *     security:
 *       - bearerAuth: []
 *     tags: [Career]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CareerMetrics'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
