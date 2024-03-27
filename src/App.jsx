import Page from "./components/page";
import { DataProvider } from "./DataProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NodeHoverProvider } from "./pages/planner/NodeHoverProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f84471",
    },
  },
});

function App() {
  return (
    <>
      <NodeHoverProvider>
        <DataProvider>
          <ThemeProvider theme={theme}>
            <Page />
          </ThemeProvider>
        </DataProvider>
      </NodeHoverProvider>
    </>
  );
}

export default App;
