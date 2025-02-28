import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SnippetList from "./components/SnippetList";
import NewSnippet from "./components/NewSnippet";
import { Grommet, Box, Button, Heading } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};


<Grommet theme={theme} full>

</Grommet>

function App() {
    return (
      <Grommet theme={theme} full>
        <Box align="center" justify="center" pad="large">
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/SnippetList" replace />} />
                <Route path="/SnippetList" element={<SnippetList />} />
                <Route path="/NewSnippet" element={<NewSnippet />} />
            </Routes>
        </Router>
        </Box>
      </Grommet>
    );
}

export default App;
