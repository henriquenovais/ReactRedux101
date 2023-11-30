import { FC, MouseEvent } from "react";
import classnames from "classnames";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";

interface IButton {
  text: string;
  icon?: JSX.Element;
  shape?: ButtonShape;
  coloring?: ButtonColoring;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IButton> = ({
  text,
  icon = <></>,
  shape = ButtonShape.SQUARE,
  coloring = ButtonColoring.PRIMARY,
  onClick = () => {},
  className = "",
}) => {
  const classNames = classnames(
    className,
    "flex items-center justify-center py-1.5 px-1.5 border w-32 h-12 font-bold",
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

export default Button;
