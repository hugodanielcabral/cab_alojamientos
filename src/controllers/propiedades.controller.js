import { pool } from "../db.js";
export const getPropiedades = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM propiedades");
  res.json(result.rows);
};

export const getPropiedad = async (req, res) => {
  const { id } = req.params;
  try {
    if (id == "ASC") {
      const result = await pool.query(
        "SELECT * FROM propiedades ORDER BY precio ASC "
      );

      if (result.rowCount === 0) {
        return res.status(404).json({
          message: "Propiedad no encontrada",
        });
      }
      res.json(result.rows);
    } else if (id == "DESC") {
      const result = await pool.query(
        "SELECT * FROM propiedades ORDER BY precio DESC"
      );

      if (result.rowCount === 0) {
        return res.status(404).json({
          message: "Propiedad no encontrada",
        });
      }
      res.json(result.rows);
    }
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

export const getPropiedadesByPrecio = async (req, res) => {
  const { tipo } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM propiedades ORDER BY precio $1",
      [tipo]
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

export const getHistorialReservas = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT reserva_id, fecha_inicio, fecha_fin, usuarios.nombre AS nombre_usuario, usuarios.correo, propiedades.nombre AS nombre_propiedad, propiedades.usuario_id AS propietario_id, usuarios.usuario_id, propiedades.propiedad_id FROM reservas INNER JOIN usuarios ON reservas.usuario_id = usuarios.usuario_id INNER JOIN propiedades ON reservas.propiedad_id = propiedades.propiedad_id WHERE reservas.propiedad_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No hay reservas",
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
