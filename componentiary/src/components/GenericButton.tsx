import { FC } from "react";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";

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
  return <button></button>;
};

export default GenericButton;
