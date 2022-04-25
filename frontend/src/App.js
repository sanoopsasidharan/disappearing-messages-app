import PageRoutes from "./route/PageRoutes";
import "./App.css";
import { UserContextProvider } from "./Store/UserContext";

function App() {
  return (
    <UserContextProvider>
      <PageRoutes />
    </UserContextProvider>
  );
}

export default App;
