import { Box, Typography, Link } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h4" gutterBottom>Contact Me:</Typography>
      <Typography>Email: mahafaheem371@gmail.com </Typography>
      <Typography>
        LinkedIn:{" "}
        <Link href="https://linkedin.com/in/yourname" target="_blank">
          linkedin.com/in/yourname
        </Link>
      </Typography>
    </Box>
  );
}

export default Contact;
