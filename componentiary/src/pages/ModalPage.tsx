import { FC, useState } from "react";
import GenericButton from "../components/GenericButton";
import GenericModal from "../components/GenericModal";
import { ModalType } from "../constants/enums/modal";

const ModalPage: FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <div>
      <GenericButton
        text="Open Modal"
        onClick={() => setToggleModal((current) => !current)}
      />
      {toggleModal && (
        <GenericModal
          type={ModalType.CHOICE}
          onClose={() => setToggleModal(false)}
          onConfirm={() => {}}
        />
      )}
    </div>
  );
};

export default ModalPage;
