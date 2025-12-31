import { styled } from "@/theme";
import { Button } from "./Button";

export const InputButton = styled(Button, {
  position: "absolute",
  right: "$rem$0_5",
  top: "50%",
  transform: "translateY(-50%)",
  minWidth: "auto",
  backgroundColor: "$green",
});
