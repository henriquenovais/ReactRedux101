import { FC } from "react";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { className } from "../utils/Strings";

interface IGenericButton {
  text: string;
  icon?: JSX.Element;
  shape?: ButtonShape;
  coloring?: ButtonColoring;
  isOutlined?: Boolean;
  isFilled?: Boolean;
}

const GenericButton: FC<IGenericButton> = ({
  text,
  icon = <></>,
  shape = ButtonShape.SQUARE,
  coloring = ButtonColoring.PRIMARY,
  isOutlined = true,
  isFilled = true,
}) => {
  const classname = className(
    "flex items-center justify-center py-1.5 px-1.5 border w-32 font-bold",
    {
      "border-blue-500 bg-blue-500 text-white":
        coloring === ButtonColoring.PRIMARY,
      "border-gray-900 bg-gray-900 text-white":
        coloring === ButtonColoring.SECONDARY,
      "border-green-500 bg-green-500 text-white":
        coloring === ButtonColoring.SUCCESS,
      "border-yellow-400 bg-yellow-400 text-white":
        coloring === ButtonColoring.WARNING,
      "border-red-500 bg-red-500 text-white":
        coloring === ButtonColoring.DANGER,
      "rounded-full": shape === ButtonShape.PILL,
      "rounded-lg": shape === ButtonShape.ROUNDED_CORNERS,
    }
  );

  return (
    <button className={classname}>
      {icon}
      {text}
    </button>
  );
};

export default GenericButton;
