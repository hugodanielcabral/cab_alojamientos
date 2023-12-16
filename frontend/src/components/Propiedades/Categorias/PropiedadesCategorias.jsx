import { Button } from "../../UI/index.js";

export const PropiedadesCategorias = ({ setCategoria }) => {
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

  return (
    <div className="container flex justify-center navbar">
      <div className="right-0 dropdown dropdown-hover">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
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
      </ul>
    </div>
  );
};
