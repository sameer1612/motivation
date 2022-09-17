import { Provider } from "react-redux";
import "./App.scss";
import Home from "./components/home";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
