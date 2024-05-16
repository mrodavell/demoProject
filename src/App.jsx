import { Button, Container, TextField, Box } from "@mui/material"

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <TextField size="small" variant="outlined" placeholder="Email" label="Email" />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField type="password" size="small" variant="outlined" placeholder="Password" label="Password" />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained">Login</Button>
        </Box>
      </Container>
    </>
  )
}

export default App
