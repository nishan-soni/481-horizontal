import Page from "./components/page";
import { DataProvider } from "./DataProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <DataProvider>
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>
      </DataProvider>
    </>
  );
}

export default App;
