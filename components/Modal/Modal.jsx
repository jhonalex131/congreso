const Modal = (props) => {
  return (
    <>
      <input type="checkbox" id={props.for} className="modal-toggle" />
      <label htmlFor={props.for} className="modal">
        <label className="relative w-11/12 max-w-2xl modal-box" htmlFor>
          <label
            htmlFor={props.for}
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="py-4 text-lg font-bold text-center">
            {props.title}
          </h3>
          <p className="py-4 text-center">
            {props.content}
          </p>
          <div className="py-4 text-sm text-center">
              <a href={props.linkSource} className="link link-primary">
                {props.source}
              </a>
          </div>
        </label>
      </label>
    </>
  );
};

export default Modal;
