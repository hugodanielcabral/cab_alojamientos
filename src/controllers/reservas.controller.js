import pool from "../db.js";

export const getReservas = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT reservas.*, propiedades.nombre AS nombre_propiedad, propiedades.img_portada AS portada FROM reservas INNER JOIN propiedades ON reservas.propiedad_id = propiedades.propiedad_id WHERE reservas.usuario_id = $1",
      [req.userId]
    );
    res.json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error",
      error: error.message,
    });
  }
};

export const getReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM reservas WHERE reserva_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Reserva no encontrada",
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

export const getReservasByFecha = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT fecha_inicio, fecha_fin FROM reservas WHERE propiedad_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Reserva no encontrada",
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

export const createReserva = async (req, res) => {
  const { propiedad_id, fecha_inicio, fecha_fin, tarjeta, vencimiento, cvv } =
    req.body;

  console.log(req.body);
  try {
    const result = await pool.query(
      "INSERT INTO reservas (usuario_id, propiedad_id, fecha_inicio, fecha_fin, tarjeta, vencimiento, cvv) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        req.userId,
        propiedad_id,
        fecha_inicio,
        fecha_fin,
        tarjeta,
        vencimiento,
        cvv,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};

export const updateReserva = async (req, res) => {
  const { id } = req.params;
  const { propiedad_id, fecha_inicio, fecha_fin, tarjeta, vencimiento, cvv } =
    req.body;

  try {
    const result = await pool.query(
      "UPDATE reservas SET propiedad_id = $1, fecha_inicio = $2, fecha_fin = $3, tarjeta = $4, vencimiento = $5, cvv = $6 WHERE reserva_id = $5 RETURNING *",
      [propiedad_id, fecha_inicio, fecha_fin, tarjeta, vencimiento, cvv, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Reserva no encontrada",
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

export const deleteReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM reservas WHERE reserva_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Reserva no encontrada",
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
