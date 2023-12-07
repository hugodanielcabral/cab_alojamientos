import { pool } from "../db.js";
export const getPropiedades = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM propiedades");
  res.json(result.rows);
};

export const getPropiedad = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM propiedades WHERE propiedad_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Propiedad no encontrada",
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

export const createPropiedad = async (req, res) => {
  const { nombre, descripcion, ubicacion, precio } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO propiedades (usuario_id,nombre, descripcion, ubicacion, precio) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [req.userId, nombre, descripcion, ubicacion, precio]
    );
    console.log(req.userId);
    res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};

export const updatePropiedad = async (req, res) => {
  const { id } = req.params;
  const { usuario_id, nombre, descripcion, ubicacion, precio } = req.body;

  try {
    const result = await pool.query(
      "UPDATE propiedades SET usuario_id = $1, nombre = $2, descripcion = $3, ubicacion = $4, precio = $5 WHERE propiedad_id = $6 RETURNING *",
      [usuario_id, nombre, descripcion, ubicacion, precio, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Propiedad no encontrada",
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

export const deletePropiedad = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM propiedades WHERE propiedad_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Propiedad no encontrada",
      });
    }
    console.log(result);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};
