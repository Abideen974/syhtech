import Box from "@mui/material/Box";
import "./App.css";
import ComponentContiner from "./components/ComponentContiner";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90px",
        position: "relative",
        backgroundColor: "#388FCB",
        pt: "30px",
      }}
    >
      <Box
        sx={{
          top: 0,
          display: 'flex',
        }}
      >
      </Box>

      <Box
        sx={{
          pt: 2,
          borderRadius: "40px 40px 0px 0px",
          zIndex: 1000,
          mt: "10px",
          backgroundColor: "#FFF",
        }}
      >
        <ComponentContiner />
      </Box>
    </Box>
  );
}

export default App;
