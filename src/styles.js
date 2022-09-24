import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  fontFamily: ["Abel", "san-serif"].join(","),
  fontSize: "22px",
  textTransform: "uppercase",
  color: "#e28743",
  borderBottom: "1px solid transparent",
  "&:hover": {
    borderBottom: "1px solid #e28743",
    transition: "0.5s",
  },
}));
