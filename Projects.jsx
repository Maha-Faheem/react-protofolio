import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";

function Projects() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">To-Do App</Typography>
            <Typography>
              A simple task manager using React and Material-UI. Features: Add, Edit, Delete tasks.
            </Typography>
            <Button
              variant="contained"
              href="https://github.com/Maha-Faheem/react-protofolio"
              target="_blank"
              sx={{ mt: 1 }}
            >
              View on GitHub
            </Button>
          </CardContent>
        </Card>

        
      </Stack>
    </Box>
  );
}

export default Projects;
