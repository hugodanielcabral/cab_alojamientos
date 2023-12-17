import pool from "../db.js";

export const getUsuarios = async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = (page - 1) * limit;

  try {
    const countResult = await pool.query("SELECT COUNT(*) FROM usuarios");
    const total = countResult.rows[0].count;

    const result = await pool.query(
      "SELECT * FROM usuarios ORDER BY usuario_id LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    res.json({
      data: result.rows,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: parseInt(total, 10),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error",
      error: error.message,
    });
  }
};

export const getUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE usuario_id = $1",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};

export const desactivarUsuario = async (req, res) => {
  const { id } = req.params;
  const { activo } = req.body;
  try {
    const result = await pool.query(
      "UPDATE usuarios SET activo = $1 WHERE usuario_id = $2 RETURNING *",
      [activo, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};
