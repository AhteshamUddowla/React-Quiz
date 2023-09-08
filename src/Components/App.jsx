import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/pages/Login";
import Signup from "../Components/pages/Signup";
import { AuthProvider } from "../Contexts/AuthContext";
import "../Styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={<PublicRoute element={<Signup />} />}
            />
            <Route
              path="/login"
              element={<PublicRoute element={<Login />} />}
            />
            {/* Wrap PrivateRoute components with Route */}
            <Route path="/quiz" element={<PrivateRoute element={<Quiz />} />} />
            <Route
              path="/result"
              element={<PrivateRoute element={<Result />} />}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
