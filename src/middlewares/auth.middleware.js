import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  // Debido que express no puede leer la cookie, se debe usar un middleware para hacer la conversion.
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No estas autorizado",
    });
  }

  // Se hace lo inverso al hash, luego se envia los datos del usuario

  jwt.verify(token, "1234", (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: "No estas autorizado",
      });

    // En decoded le pasamos el id del usuario, el cual se encuentra en el token
    req.userId = decoded.id;

    next();
  });
};
