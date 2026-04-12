import clsx from "clsx";
import { type CSSProperties, type ReactNode, useCallback, useMemo, useState } from "react";

interface CardProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  shadow?: "lw" | "md" | "tl";
}

const cardBaseStyle: CSSProperties = {
  flex: 1,
  height: "100%",
  padding: "1em",
  cursor: "pointer",
  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineColor: "transparent",
  transition: "all 0.2s ease-in-out",
  transform: "scale(1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};
const cardHoverStyle: CSSProperties = {
  outlineColor: "var(--ifm-color-primary)",
  transform: "scale(0.98)",
};
const cardPressedStyle: CSSProperties = {
  transform: "scale(0.96)",
  transition: "transform 0.1s ease-in-out",
};

export default function Card({ className, style, children, shadow }: Readonly<CardProps>) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cardShadow = shadow ? `item shadow--${shadow}` : "";

  const mergedStyle = useMemo<CSSProperties>(
    () => ({
      ...style,
      ...cardBaseStyle,
      ...(isHovered ? cardHoverStyle : {}),
      ...(isPressed ? cardPressedStyle : {}),
    }),
    [style, isHovered, isPressed],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);
  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  return (
    <div
      role="button"
      className={clsx("card", className, cardShadow)}
      style={mergedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
}
