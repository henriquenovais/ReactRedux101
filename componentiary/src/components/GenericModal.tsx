import { FC, MouseEvent } from "react";
import ReactDOM from "react-dom";
import { ModalType } from "../constants/enums/modal";
import GenericButton from "./GenericButton";

interface IGenericModal {
  type: ModalType;
  onClose: () => void;
  onConfirm: () => void;
}

const GenericModal: FC<IGenericModal> = ({ type, onClose, onConfirm }) => {
  const modal = document.querySelector("#modal");
  if (!modal) return <></>;

  const handleClose = (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    onClose();
  };

  return ReactDOM.createPortal(
    <div>
      <div
        className="absolute inset-0 bg-gray-300 opacity-80"
        onClick={handleClose}
      ></div>
      <div className="absolute inset-40 flex flex-col items-center justify-center p-10  bg-white">
        <h1>Modal!!</h1>
        <div className="flex flex-inline gap-2">
          {type === ModalType.CHOICE && <GenericButton text="Confirm" />}
          <GenericButton text="Dismiss" onClick={onClose} />
        </div>
      </div>
    </div>,
    modal
  );
};

export default GenericModal;
