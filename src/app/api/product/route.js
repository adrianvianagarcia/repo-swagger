/**
 * @openapi
 * /api/product:
 *   post:
 *     summary: Inserta un producto al listado de productos
 *     tags:
 *       - Insertar producto al listado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 10
 *               name:
 *                 type: string
 *                 example: "iPhone 16 Pro"
 *               price:
 *                 type: integer
 *                 example: 1750
 *     responses:
 *       201:
 *         description: Producto añadido satisfactoriamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto agregado"
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 10
 *                     name:
 *                       type: string
 *                       example: "iPhone 16 Pro"
 *                     price:
 *                       type: integer
 *                       example: 1750
 *       400:
 *         description: No se ha podido añadir el producto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "ID, nombre y precio son requeridos"
 *       500:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error en la solicitud"
 */
export async function POST(req) {
    try {
      const body = await req.json();
      
      if (!body.name || !body.price) {
        return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
      }
  
      return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
    } catch (error) {
      return Response.json({ message: "Error en la solicitud" }, { status: 500 });
    }
  }
  
