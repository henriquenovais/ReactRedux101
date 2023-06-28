import { FC, useState } from "react";
import GenericButton from "../components/GenericButton";
import GenericModal from "../components/GenericModal";
import { ModalType } from "../constants/enums/modal";

const ModalPage: FC = () => {
  const [dissmissModal, setDismissModal] = useState<boolean>(false);
  const [choiceModal, setChoiceModal] = useState<boolean>(false);

  return (
    <div className="flex flex-row p-5 gap-3">
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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo
        elementum orci. Ut tincidunt tempus luctus. Nunc vel est in velit
        vulputate commodo. Phasellus auctor pharetra est vehicula placerat.
        Morbi consequat purus lacus, vel elementum urna facilisis sit amet.
        Fusce nec ligula rhoncus augue gravida porttitor ac rutrum elit. Aenean
        feugiat ultricies lacus id euismod. Suspendisse potenti. Maecenas
        venenatis maximus dui in sodales. In ac iaculis velit. Aenean ut posuere
        libero. Aenean finibus eleifend urna eget tempus. Vestibulum justo
        turpis, facilisis vitae justo at, mollis ornare mi. Mauris eu eros
        tincidunt enim fringilla pellentesque quis vitae purus. Nam in felis
        felis. Curabitur commodo elit mi, id tristique libero rhoncus quis.
        Donec pharetra vel enim eu cursus. Curabitur elementum urna sed erat
        egestas, at mollis ligula porta. Nullam at massa ipsum. Ut vitae ipsum
        blandit, tempus nisl vitae, iaculis nisi. Sed faucibus nisi at dolor
        congue iaculis. Aenean imperdiet justo sed diam dapibus porttitor. Etiam
        in ipsum vitae libero suscipit fermentum. Vestibulum sagittis velit ex,
        porttitor fringilla erat egestas ac. Maecenas finibus consequat neque,
        quis laoreet quam finibus non. Nulla ut cursus ligula. Proin lectus
        tortor, commodo at dictum a, accumsan ut tellus. Quisque nulla nisi,
        lobortis in pharetra lobortis, mollis vel velit. Sed ut faucibus purus.
        Phasellus urna dolor, pretium non ligula vitae, faucibus pharetra
        sapien. Sed a varius ligula. Mauris non urna mi. Pellentesque non ipsum
        tellus. Sed at libero orci. Etiam mauris sem, auctor non ornare sed,
        pulvinar id metus. Suspendisse pharetra metus vitae lorem ullamcorper,
        quis laoreet enim aliquet. Maecenas varius tellus at consequat rutrum.
        Donec ornare mi sed rhoncus euismod. Suspendisse potenti. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Aenean scelerisque vestibulum libero eget dignissim. Ut sit
        amet dui eu ante aliquet viverra. Mauris id lobortis nibh, eget faucibus
        felis. Sed quis tempor purus. Ut ultrices quam id molestie tempor. In
        felis augue, porta eu est nec, condimentum porta sapien. Donec tempor
        posuere suscipit. Sed tellus ligula, facilisis at lorem sit amet,
        efficitur scelerisque ante. In at sapien eget turpis dictum posuere vel
        quis erat. Phasellus imperdiet porttitor lacus, ac commodo eros sagittis
        ut. Proin non velit fringilla, eleifend odio nec, eleifend elit. Ut
        aliquet nunc at metus gravida lacinia. Morbi ex ligula, tincidunt et
        efficitur a, elementum eu tellus. Proin ut erat ipsum. In vestibulum
        pretium neque. Phasellus bibendum ante quis ligula malesuada vulputate.
        Ut volutpat, purus vitae vestibulum luctus, sapien elit mollis quam,
        eget tincidunt eros felis et quam.
      </p>
    </div>
  );
};

export default ModalPage;
