import { MovieProvider } from "./context/MovieContext";
import Home from "./page/Home";

function App() {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
}

export default App;
