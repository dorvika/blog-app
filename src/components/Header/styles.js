import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(Stack)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "50px",
  padding: "0 20px",
}));

export const HeaderLogo = styled(Box)(() => ({
  width: "40px",
  height: "40px",
}));
