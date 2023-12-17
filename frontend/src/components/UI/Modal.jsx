import { Button } from "./index.js";
export const Modal = (props) => {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => document.getElementById(`${props.id}`).showModal()}
      >
        Filtros
      </button>
      <dialog id={`${props.id}`} className="modal modal-bottom sm:modal-middle">
        <div className="flex flex-col modal-box">
          <h3 className="text-lg font-bold">Filtrar propiedades</h3>
          <p className="mt-10 text-lg text-center" classNameName="text-lg">
            Ordenar por precio
          </p>
          <div className="justify-center mt-5 card-actions">
            <Button onClick={props.ordenarPropiedadesCaras}>Más caras</Button>
            <Button onClick={props.ordenarPropiedadesBaratas}>
              Más baratas
            </Button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
