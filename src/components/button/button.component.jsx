import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from "./button.styles";

const Button = ({ handleClick, variant, path, children }) => {
  switch (variant) {
    case "primary":
      return (
        <PrimaryButton onClick={handleClick} className={"descriptionButton"}>
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton onClick={handleClick} className={"descriptionButton"}>
          {children}
        </SecondaryButton>
      );
    case "tertiary":
      return (
        <TertiaryButton onClick={handleClick} className={"descriptionButton"}>
          {children}
        </TertiaryButton>
      );
    default:
      return (
        <PrimaryButton className={"descriptionButton"} onClick={handleClick}>
          {children}
        </PrimaryButton>
      );
  }
};

export default Button;
