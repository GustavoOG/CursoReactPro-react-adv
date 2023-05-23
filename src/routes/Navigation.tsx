import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import logo from "../logo.svg";
import { FormikYubPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction";


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo"></img>
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Formik yup
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/formik-basic" element={<FormikBasicPage></FormikBasicPage>}></Route>
          <Route path="/formik-yup" element={<FormikYubPage></FormikYubPage>}></Route>
          <Route path="/formik-components" element={<FormikComponents></FormikComponents>}></Route>
          
          <Route path="/formik-abstractation" element={<FormikAbstraction></FormikAbstraction>}></Route>
          <Route path="home" element={<h1>Home Page</h1>}></Route>
          <Route
            path="/*"
            element={<Navigate to="/home" replace></Navigate>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
