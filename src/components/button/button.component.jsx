import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from "./button.styles";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const { variant, children } = props;
  const navigate = useNavigate();

  switch (variant) {
    case "primary":
      return (
        <PrimaryButton className={"descriptionButton"}>
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton className={"descriptionButton"}>
          {children}
        </SecondaryButton>
      );
    case "tertiary":
      return (
        <TertiaryButton className={"descriptionButton"}>
          {children}
        </TertiaryButton>
      );
    default:
      return (
        <PrimaryButton
          className={"descriptionButton"}
          onClick={() => navigate("/category/speakers")}
        >
          {children}
        </PrimaryButton>
      );
  }
};

export default Button;
