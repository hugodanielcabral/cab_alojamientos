import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";
export const signin = async (req, res) => {
  const { correo, contrasena } = req.body;
  console.log(req.body);

  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE correo = $1",
      [correo]
    );

    if (result.rowCount === 0) {
      return res.status(401).json({
        message: "Credenciales incorrectas",
      });
    }

    const validContrasena = await bcrypt.compare(
      contrasena,
      result.rows[0].contrasena
    );

    if (!validContrasena) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    const token = await createAccessToken({
      id: result.rows[0].usuario_id,
    });

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};

export const signup = async (req, res) => {
  const { nombre, correo, contrasena, pais, rol } = req.body;
  console.log(req.body);
  console.log(nombre, correo, contrasena, pais, rol);

  try {
    const hashedContrasena = await bcrypt.hash(contrasena, 10);
    const gravatar = `https://gravatar.com/avatar/${md5(correo)}?d=identicon`;

    const result = await pool.query(
      "INSERT INTO usuarios ( nombre, correo, contrasena, pais, rol, avatar, activo) VALUES ($1, $2, $3, $4, $5, $6, true) RETURNING *",
      [nombre, correo, hashedContrasena, pais, rol, gravatar]
    );

    const token = await createAccessToken({
      id: result.rows[0].usuario_id,
    });

    console.log(result.rows[0].usuario_id);

    res.cookie("token", token, {
      // httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};

export const signout = (req, res) => {
  // Elimina la cookie de headers
  res.clearCookie("token");
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE usuario_id = $1",
      [req.userId]
    );

    return res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error",
      error: error.message,
    });
  }
};
