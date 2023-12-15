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
      name: "Cuevas",
      icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    },
    {
      name: "Minicasas",
      icon: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    },
    {
      name: "Casa de árbol",
      icon: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    },
  ];

  return (
    <div className="container flex justify-center navbar">
      <div className="flex gap-10">
        <ul className="menu menu-vertical lg:menu-horizontal bg-[#06657F] rounded-box">
          {categorias.map((categoria, index) => (
            <li key={index}>
              <button
                className="flex flex-col items-center p-2 text-xs btn btn-ghost" // Adjust padding and text size
                onClick={() => setCategoria(categoria.name)}
              >
                <img
                  src={categoria.icon}
                  alt={categoria.name}
                  className="w-8 h-8 mb-2" // Adjust image size
                />
                <span>{categoria.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
