import { createGlobalStyle } from "styled-components";
import ToDolist from "./ToDoList";

const GlobalStyle = createGlobalStyle`
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDolist />
    </>
  );
}

export default App;
