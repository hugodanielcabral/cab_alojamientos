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

export const getPropiedadByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM propiedades WHERE usuario_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Propiedad no encontrada",
      });
    }

    res.json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};

export const createPropiedad = async (req, res) => {
  const {
    nombre,
    descripcion,
    provincia,
    localidad,
    categoria,
    precio,
    cant_habitaciones,
    cant_camas,
    cant_banios,
    img_portada,
    img_habitacion,
    img_banio,
    img_comedor,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO propiedades (usuario_id, nombre, descripcion, provincia, localidad, categoria, precio, cant_habitaciones, cant_camas, cant_banios, img_portada, img_habitacion, img_banio, img_comedor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
      [
        req.userId,
        nombre,
        descripcion,
        provincia,
        localidad,
        categoria,
        precio,
        cant_habitaciones,
        cant_camas,
        cant_banios,
        img_portada,
        img_habitacion,
        img_banio,
        img_comedor,
      ]
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
  const {
    nombre,
    descripcion,
    provincia,
    localidad,
    categoria,
    precio,
    cant_habitaciones,
    cant_camas,
    cant_banios,
    img_portada,
    img_habitacion,
    img_banio,
    img_comedor,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE propiedades SET nombre = $1, descripcion = $2, provincia = $3, localidad = $4, categoria = $5, precio = $6, cant_habitaciones = $7, cant_camas = $8, cant_banios = $9, img_portada = $10, img_habitacion = $11, img_banio = $12, img_comedor = $13 WHERE propiedad_id = $14 RETURNING *",
      [
        nombre,
        descripcion,
        provincia,
        localidad,
        categoria,
        precio,
        cant_habitaciones,
        cant_camas,
        cant_banios,
        img_portada,
        img_habitacion,
        img_banio,
        img_comedor,
        id,
      ]
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
    res.sendStatus(204).json({ message: "Propiedad eliminada" });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};
