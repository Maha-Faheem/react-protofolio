import { Typography, Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "#1976d2", color: "white" }}>
      <Typography variant="h3">Maha Faheem Bahtti</Typography>
      <Typography variant="subtitle1">React Developer | Software Engineering Student</Typography>
    </Box>
  );
}

export default Header;
