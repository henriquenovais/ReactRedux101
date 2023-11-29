import { FC, MouseEvent } from "react";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { classNamer } from "../utils/Strings";

interface IGenericButton {
  text: string;
  icon?: JSX.Element;
  shape?: ButtonShape;
  coloring?: ButtonColoring;
  isOutlined?: Boolean;
  isFilled?: Boolean;
  onClick?: () => void;
  className?: string;
}

const GenericButton: FC<IGenericButton> = ({
  text,
  icon = <></>,
  shape = ButtonShape.SQUARE,
  coloring = ButtonColoring.PRIMARY,
  isOutlined = true,
  isFilled = true,
  onClick = () => {},
  className = "",
}) => {
  const classNames = classnames(
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
    },
    className,
    "flex items-center justify-center py-1.5 px-1.5 border w-32 h-12 font-bold"
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  return (
    <button className={classNames} onClick={handleClick}>
      {icon}
      {text}
    </button>
  );
};

export default GenericButton;
