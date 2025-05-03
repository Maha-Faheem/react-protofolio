import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I am currently a Software Engineering student in my 4th semester. I
        specialize in frontend development using React.js, and I'm passionate
        about building beautiful, functional web applications.
      </Typography>
    </Box>
  );
}

export default About;
