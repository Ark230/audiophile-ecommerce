import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D87D4A",
  color: "#FFFFFF",
  padding: "1.5rem",
  width: "14rem",
  fontSize: "1.3rem",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#FBAF85"
  }
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#FFFFFF",
  padding: "1.5rem",
  width: "16rem",
  fontSize: "1.3rem",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#4C4C4C"
  }
}));

export const TertiaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#000000",
  border: "2px solid #000000",
  padding: "1.5rem",
  width: "16rem",
  fontSize: "1.3rem",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#000000",
    color: "#FFFFFF"
  }
}));
