import { Button } from "../../UI/index.js";

export const PropiedadesCategorias = ({ setCategoria }) => {
  const categorias = [
    "Todos",
    "Cabañas",
    "Casas de Campo",
    "Frente a la playa",
    "Camping",
    "Cuevas",
    "Minicasas",
    "Casa de árbol",
  ];

  return (
    <div className="container flex justify-center navbar">
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {categorias.map((el, index) => (
            <Button
              className="btn btn-primary"
              key={index}
              onClick={() => setCategoria(el)}
            >
              {el}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
