import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Users, About} from './pages'
import Layout from './layout'
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
