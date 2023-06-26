"use strict";
/**
 * @swagger
 * /user/auth/register:
 *   post:
 *     summary: App is required for the user to register.
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           required:
 *             - email
 *             - name
 *             - gender
 *             - phone
 *             - birthday
 *             - province
 *           properties:
 *             email:
 *               type: string
 *             name:
 *               type: string
 *             gender:
 *               type: string
 *             phone:
 *               type: string
 *             birthday:
 *               type: string
 *             province:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *        description: App user register.
 *       404:
 *        description: post not created
 *
 */
/**
 * @swagger
 * /user/auth/login:
 *   post:
 *     summary: App is required for the user to login.
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *        description: App user register.
 *       404:
 *        description: post not created
 *
 */
/**
 * @swagger
 * /user/post/:postId/:
 *   get:
 *     summary: App is required for the user to login.
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *        description: App user register.
 *       404:
 *        description: post not created
 *
 */ 
