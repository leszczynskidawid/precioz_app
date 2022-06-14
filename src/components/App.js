import ButtonForm from "./atoms/Buttons/ButtonForm";
import VirtualComponentsDisigned from "assets/VirtualComponetsDisigned";
import Dashboard from "assets/HelperWorkerFolderWithRoutesComponent/Deashboard";
import NoMatch from "assets/HelperWorkerFolderWithRoutesComponent/NoMach";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "context/getAuth";
import ProtectedRoute from "components/atoms/ProtectedRoute/ProtectedRoute";
import Admin from "assets/HelperWorkerFolderWithRoutesComponent/Admin";
import { RouterPathTypes } from "constants/RouterPathTypes";
import { useRequest } from "hooks/useRequest";
import { ApiClientMethodTypes } from "constants/ApiClientMehodTypes";
import { Alert } from "./atoms/Alert";

function App() {
  const [users, setUsers] = useState([]);
  const { callApiRequest } = useRequest();

  useEffect(() => {
    (async function getUsers() {
      const res = await callApiRequest(
        ApiClientMethodTypes.get,
      );

      if (res) {
        setUsers(res.results);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route
          path={RouterPathTypes.home}
          index
          element={<VirtualComponentsDisigned />}
        />
        <Route
          path={RouterPathTypes.home}
          element={<VirtualComponentsDisigned />}
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path={RouterPathTypes.dashboard}
            element={<Dashboard />}
          />
          <Route
            path={RouterPathTypes.admin}
            element={<Admin />}
          />
        </Route>
        <Route
          path={RouterPathTypes.noMatch}
          element={<NoMatch />}
        />
      </Routes>
      <div>
        {users?.map((user) => (
          <div key={user}>{user.email}</div>
        ))}
      </div>

      <Alert />
    </div>
  );
}

export default App;

const Navigation = () => {
  const { login, logout, token } = useAuth();

  return (
    <nav
      style={{
        fontSize: "29px",
        border: "2px solid grey",
        background: "whitesmoke",
      }}
    >
      <NavLink to={RouterPathTypes.home}>
        Home
      </NavLink>
      <NavLink to={RouterPathTypes.dashboard}>
        Dashboard
      </NavLink>
      <NavLink to={RouterPathTypes.admin}>
        Admin
      </NavLink>

      {token ? (
        <ButtonForm onClick={() => logout()}>
          Logout
        </ButtonForm>
      ) : (
        <ButtonForm onClick={() => login()}>
          Login
        </ButtonForm>
      )}
    </nav>
  );
};
