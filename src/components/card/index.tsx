import clsx from "clsx";
import { type CSSProperties, type ReactNode, useState } from "react";

interface CardProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  shadow?: "lw" | "md" | "tl";
}

export default function Card({
  className,
  style,
  children,
  shadow,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cardBaseStyle = {
    padding: "1em",
    cursor: "pointer",
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "transparent",
    transition: "all 0.2s ease-in-out",
    transform: "scale(1)",
  };
  const cardHoverStyle = {
    outlineColor: "var(--ifm-color-primary)",
    transform: "scale(0.98)",
  };

  const cardPressedStyle = {
    transform: "scale(0.96)",
    transition: "transform 0.1s ease-in-out",
  };

  const cardShadow = shadow ? `item shadow--${shadow}` : "";

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: It's not a button, but an card
    <div
      className={clsx("card", className, cardShadow)}
      style={{
        ...style,
        ...cardBaseStyle,
        ...(isHovered ? cardHoverStyle : {}),
        ...(isPressed ? cardPressedStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => {
        setIsPressed(false);
      }}
    >
      {children}
    </div>
  );
}
