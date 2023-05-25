import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikBasicPage, RegisterPage, FormikYubPage, FormikComponents, FormikAbstraction, RegisterFormikPage, DynamicForm } from "../03-forms/pages";

import logo from "../logo.svg";

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
              <NavLink to="/formik-register" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
              Register Formik 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({ isActive }) => (isActive ? "nav-active" : "")}              >
                Dynamic Form
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
          <Route path="/formik-register" element={<RegisterFormikPage></RegisterFormikPage>}></Route>
          <Route path="/formik-register" element={<RegisterFormikPage></RegisterFormikPage>}></Route>
          <Route path="/dynamic-form" element={<DynamicForm></DynamicForm>}></Route>
          <Route
            path="/*"
            element={<Navigate to="/home" replace></Navigate>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
