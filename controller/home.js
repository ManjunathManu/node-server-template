export const home = async (req, res, next) => {
  res.send({
    message: 'Hello there!!!',
  });
};

/**
 * @swagger
 * /:
 *   get:
 *     description: Return hello there
 *     summary: Home route
 *     produces:
 *       - application/json
 *     tags:
 *       - API
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401'
 *       500:
 *         $ref: '#/components/responses/500'
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello there!!!
 */
