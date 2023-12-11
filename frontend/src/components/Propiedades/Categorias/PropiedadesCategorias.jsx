export const PropiedadesCategorias = ({ setCategoria }) => {
  return (
    <div className="container flex justify-center navbar">
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          <button
            className="btn btn-secondary"
            onClick={() => setCategoria("Todos")}
          >
            Todos
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setCategoria("Cabaña")}
          >
            Cabañas
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setCategoria("Casas de campo")}
          >
            Casa de Campo
          </button>
          <button className="btn btn-primary">Frente a la playa</button>
          <button className="btn btn-primary">Camping</button>
          <button className="btn btn-primary">Cuevas</button>
          <button className="btn btn-primary">Minicasas</button>
          <button className="btn btn-primary">Casa de árbol</button>
          <button className="btn btn-primary">Ecológico</button>
          <button className="btn btn-primary">Casas rodantes</button>
        </div>
      </div>
    </div>
  );
};
