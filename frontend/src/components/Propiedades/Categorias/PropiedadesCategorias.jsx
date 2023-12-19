import { Modal, Button } from "../../UI/index.js";
import { BiCategory } from "react-icons/bi";

export const PropiedadesCategorias = ({
  setCategoria,
  setPropiedades,
  propiedades,
}) => {
  const categorias = [
    {
      name: "Todos",
      icon: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    },
    {
      name: "Cabañas",
      icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      name: "Casas de Campo",
      icon: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      name: "Frente a la playa",
      icon: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      name: "Camping",
      icon: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },

    {
      name: "Minicasas",
      icon: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    },
  ];

  const ordenarPropiedadesCaras = () => {
    const propiedadesOrdenadas = [...propiedades].sort(
      (a, b) => b.precio - a.precio
    );
    setPropiedades(propiedadesOrdenadas);
  };

  const ordenarPropiedadesBaratas = () => {
    const propiedadesOrdenadas = [...propiedades].sort(
      (a, b) => a.precio - b.precio
    );
    setPropiedades(propiedadesOrdenadas);
  };

  return (
    <div className="container flex justify-center navbar">
      <div className="right-0 dropdown dropdown-hover">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <BiCategory className="w-8 h-8" />
          Categorias
        </label>
        <ul
          tabIndex="0"
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          {categorias.map((categoria, index) => (
            <li key={index}>
              <button
                className="flex flex-col items-center p-2 text-xs btn btn-ghost"
                onClick={() => setCategoria(categoria.name)}
              >
                <img
                  src={categoria.icon}
                  alt={categoria.name}
                  className="w-8 h-8 mb-2"
                />
                <span>{categoria.name}</span>
              </button>
            </li>
          ))}
          <li className="mx-auto">
            <Modal id="modal-ordenar-propiedades-1" title="Filtrar">
              <h3 className="text-lg font-bold">Filtrar propiedades</h3>
              <p className="mt-10 text-lg text-center">Ordenar por precio</p>
              <div className="justify-center mt-5 card-actions">
                <Button onClick={ordenarPropiedadesCaras}>Más caras</Button>
                <Button onClick={ordenarPropiedadesBaratas}>Más baratas</Button>
              </div>
            </Modal>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:flex gap-10 menu menu-horizontal bg-[#06657F] rounded-box">
        {categorias.map((categoria, index) => (
          <li key={index}>
            <button
              className="flex flex-col items-center p-2 text-xs btn btn-ghost"
              onClick={() => setCategoria(categoria.name)}
            >
              <img
                src={categoria.icon}
                alt={categoria.name}
                className="w-8 h-8 mb-2"
              />
              <span>{categoria.name}</span>
            </button>
          </li>
        ))}
        <li>
          <Modal id="modal-ordenar-propiedades-2" title="Filtrar">
            <h3 className="text-lg font-bold">Filtrar propiedades</h3>
            <p className="mt-10 text-lg text-center">Ordenar por precio</p>
            <div className="justify-center mt-5 card-actions">
              <Button onClick={ordenarPropiedadesCaras}>Más caras</Button>
              <Button onClick={ordenarPropiedadesBaratas}>Más baratas</Button>
            </div>
          </Modal>
        </li>
      </ul>
    </div>
  );
};
