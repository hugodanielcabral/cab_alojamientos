export const Modal = (props) => {
  return (
    <div className={props.className ? props.className : ""}>
      <button
        className="btn btn-secondary"
        onClick={() => document.getElementById(`${props.id}`).showModal()}
      >
        {props.title}
      </button>
      <dialog id={`${props.id}`} className="modal modal-bottom sm:modal-middle">
        <div className="flex flex-col modal-box">
          {props.children}
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
