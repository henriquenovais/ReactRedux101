import { FC } from "react";

interface IGenericButton {
  primary?: Boolean;
  secondary?: Boolean;
  success?: Boolean;
  warning?: Boolean;
  danger?: Boolean;
  outline?: Boolean;
  rounded?: Boolean;
}

const GenericButton: FC<IGenericButton> = ({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button></button>;
};

export default GenericButton;
