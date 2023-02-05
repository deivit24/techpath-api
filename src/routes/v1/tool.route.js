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

router.route('/user').get(auth(), toolController.getUserTools);

router
  .route('/:toolId')
  .get(validate(toolValidation.getTool), toolController.getTool)
  .patch(auth('manageTools'), validate(toolValidation.updateTool), toolController.updateTool)
  .delete(auth('manageTools'), validate(toolValidation.deleteTool), toolController.deleteTool);

router
  .route('/:toolId/user')
  .post(auth(), validate(toolValidation.createUserTool), toolController.createUserTool)
  .get(auth(), validate(toolValidation.getTool), toolController.getUserTool);

router
  .route('/:toolId/upload')
  .post(auth('manageTools'), toolController.uploadToolImage)
  .delete(auth('manageTools'), toolController.deleteFileImage)
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
 *               - imageUrl
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: array
 *                 enum: [FRONTEND, BACKEND, DEVOPS]
 *               imageUrl:
 *                 type: string
 *             example:
 *               name: Vue
 *               type: [FRONTEND]
 *               imageUrl: "https://someimage.png"
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
 *     description: Only retreives tools from logged in users
 *     tags: [Tools]
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

/**
 * @swagger
 * /tools/{id}:
 *   get:
 *     summary: Get a Tool
 *     description: Get tool and details
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tool id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Tool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a tool
 *     description: Logged in admins can update tools.
 *     tags: [Tools]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tool id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: must be unique
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *                 description: needs to be https
 *               color:
 *                 type: string
 *                 description: HEX color code
 *               type:
 *                 type: array
 *                 enum: [FRONTEND, BACKEND, DEVOPS]
 *             example:
 *               name: Vue.js
 *               description: Lightweight JS Framwork
 *               imageUrl: https://image-url.com/vue.png
 *               color: #FFFFFF
 *               type: [FRONTEND]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Tool'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a tool
 *     description: Only and admin can delete a tool
 *     tags: [Tools]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tool id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /tools/{id}/user:
 *   post:
 *     summary: Create a User tool
 *     description: Only logged in users can create user tool.
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
 *               - experience
 *             properties:
 *               experience:
 *                 type: number
 *             example:
 *               experience: 5
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ToolUser'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *   get:
 *     summary: Get a User Tool
 *     description: Get a user tool tied to auth user
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: Tool id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ToolUser'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */

/**
 * @swagger
 * /tools/user:
 *   get:
 *     summary: Gets all UserTools by authed user
 *     description: Gets on user tools assiged by auth user id
 *     tags: [Tools]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ToolUser'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
