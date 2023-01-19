const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const calculateValidation = require('../../validations/calculate.validation');
const toolValidation = require('../../validations/tool.validation');
const toolController = require('../../controllers/tool.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageTools'), validate(toolValidation.createTool), toolController.createTool)
  .get(toolController.getTools);

router.route('/:toolId/user/:userId').post(auth(), validate(toolValidation.createUserTool), toolController.createUserTool);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Tools
 *   description: Tool management and retrieval
 */

/**
 * @swagger
 * /tools:
 *   post:
 *     summary: Create a tool
 *     description: Only logged in users can creat tools.
 *     tags: [Tools]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: array
 *                 enum: [FRONTEND, BACKEND, DEVOPS]
 *             example:
 *               name: Vue
 *               type: [FRONTEND]

 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Tool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all tools pertaining to user
 *     description: Only retreives tools from logged in users.
 *     tags: [Tools]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Tool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
