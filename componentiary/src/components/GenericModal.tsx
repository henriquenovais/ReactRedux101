import { FC } from "react";
import ReactDOM from "react-dom";
import { ModalType } from "../constants/enums/modal";

interface IGenericModal {
  type: ModalType;
  onClose: () => void;
  onConfirm: () => void;
}

const GenericModal: FC = () => {
  const modal = document.querySelector("#modal");
  if (!modal) return <></>;

  return ReactDOM.createPortal(
    <div className="relative bg-grey-500 opacity-80">
      <div className="absolute w-160 inset-40 bg-white">modal!!</div>
    </div>,
    modal
  );
};

export default GenericModal;
