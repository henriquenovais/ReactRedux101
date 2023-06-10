import { FC } from "react";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { className } from "../utils/Strings";

interface IGenericButton {
  shape?: ButtonShape;
  coloring?: ButtonColoring;
  isOutlined?: Boolean;
  isFilled?: Boolean;
}

const GenericButton: FC<IGenericButton> = ({
  shape = ButtonShape.ROUNDED_CORNERS,
  coloring = ButtonColoring.PRIMARY,
  isOutlined = true,
  isFilled = true,
}) => {
  const classname = className("py-1.5 px-1.5", {});

  return <button></button>;
};

export default GenericButton;
