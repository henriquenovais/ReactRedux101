import { FC, useState } from "react";
import GenericButton from "../components/GenericButton";
import GenericModal from "../components/GenericModal";

const ModalPage: FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <div>
      <GenericButton text="Open Modal" onClick={() => setToggleModal(true)} />
      {toggleModal && <GenericModal />}
    </div>
  );
};

export default ModalPage;
