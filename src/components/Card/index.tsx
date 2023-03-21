import type { CardType } from "components/types";

export const Card: CardType = ({
  children,
  hasBorderRadius = true,
  className,
  ...rest
}) => {
  const cardClassName = `bg-white p-4 roun ${
    hasBorderRadius ? "rounded-lg" : "rounded-none"
  } shadow-md ${className ?? ""}`;

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
