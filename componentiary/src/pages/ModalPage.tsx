import { FC, useState } from "react";
import GenericButton from "../components/GenericButton";
import GenericModal from "../components/GenericModal";
import { ModalType } from "../constants/enums/modal";

const ModalPage: FC = () => {
  const [dissmissModal, setDismissModal] = useState<boolean>(false);
  const [choiceModal, setChoiceModal] = useState<boolean>(false);

  return (
    <div>
      <GenericButton
        text="Open Choice Modal"
        onClick={() => setChoiceModal((current) => !current)}
      />
      {choiceModal && (
        <GenericModal
          type={ModalType.CHOICE}
          onClose={() => setChoiceModal(false)}
          onConfirm={() => {}}
        />
      )}
      <GenericButton
        text="Open Default Modal"
        onClick={() => setDismissModal((current) => !current)}
      />
      {dissmissModal && (
        <GenericModal
          type={ModalType.DISMISS}
          onClose={() => setDismissModal(false)}
          onConfirm={() => {}}
        />
      )}
    </div>
  );
};

export default ModalPage;
