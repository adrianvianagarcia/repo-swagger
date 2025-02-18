/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Obtener lista de usuarios
 *     tags:
 *       - Listado de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   email:
 *                     type: string
 *                     example: "juan@example.com"
 */

export async function GET() {
    const users = [
      { id: 1, name: "Juan Pérez", email: "juan@example.com" },
      { id: 2, name: "María López", email: "maria@example.com" },
      { id: 3, name: "Carlos Gómez", email: "carlos@example.com" }
    ];
    
    return Response.json(users, { status: 200 });
  }
  
