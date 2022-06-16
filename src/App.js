
import './App.css';
import Counter from "./components/Counter"
import WithSubnavigation from './components/Chakraui';
import { ChakraProvider } from '@chakra-ui/react'
import SimpleSidebar from "./components/Chakrauisidebar"
function App() {
  return (
    <div className="App">
        <ChakraProvider>
    <WithSubnavigation/>
    <SimpleSidebar/>
    </ChakraProvider>
     <Counter/>
    </div>
  );
}

export default App;
