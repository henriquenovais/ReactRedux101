import { FC } from "react";

interface ISkeleton {
  className: string;
  layoutQty: number;
}

const Skeleton: FC<ISkeleton> = ({ className, layoutQty }) => {
  return Array(layoutQty)
    .fill(0)
    .map((_, i) => {
      return <div className={className} key={i} />;
    });
};

export default Skeleton;
