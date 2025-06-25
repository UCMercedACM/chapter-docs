import React, { CSSProperties, ReactNode } from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.
import CardFooter from '@site/src/components/card/footer';
import CardHeader from '@site/src/components/card/header';
import CardBody from '@site/src/components/card/body';
import { useState } from 'react';
import Link from '@docusaurus/Link';
import {useLocation, Redirect} from '@docusaurus/router';
// Define an interface for the component props
interface CardProps {
  className?: string; // Custom classes for the container card
  style?: CSSProperties; // Custom styles for the container card
  children: ReactNode; // Content to be included within the card
  shadow?: 'lw' | 'md' | 'tl'; // Used to add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl)
}

export default function Card({className, style, children, shadow}: CardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

  const cardBaseStyle = {padding: "1em", cursor: "pointer", outlineWidth: "2px", outlineStyle: "solid", outlineColor: "transparent", transition: "all 0.2s ease-in-out", transform: "scale(1)"}
  const cardHoverStyle = {
    outlineColor: "var(--ifm-color-primary)",
    transform: "scale(0.98)"
  };

  const cardPressedStyle = {
    transform: 'scale(0.96)', // Shrink even more for a tactile feel
    transition: 'transform 0.1s ease-in-out',
  };

    const cardShadow = shadow ? `item shadow--${shadow}` : '';
  

    return (
        

    <div className={clsx('card', className, cardShadow)} style={{...style, ...cardBaseStyle, ...(isHovered ? cardHoverStyle : {}),         ...(isPressed ? cardPressedStyle : {})}}

    
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

}// Build the card component with the specified props
