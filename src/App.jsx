import Page from "./components/page";
import { DataProvider } from './DataProvider';


function App() {
  return (
    <>
      <DataProvider>
        <Page />
      </DataProvider>
    </>
  );
}

export default App;
