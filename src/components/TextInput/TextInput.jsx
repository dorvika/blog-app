import { TextField } from "@mui/material";

const TextInput = ({ label, onChange, name, value }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      onChange={onChange}
      name={name}
      value={value}
      required
      sx={{ mb: "15px" }}
    />
  );
};

export default TextInput;
