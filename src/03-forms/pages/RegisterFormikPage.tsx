import '../styles/styles.css'
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export interface registerForm {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Debe de tener minimo 3 caracteres')
                        .max(15, "Debe de tener 15 caracteres o menos")
                        .required("Requerido"),
                    email: Yup.string()
                        .email("El formato de email, no tiene un formato válido")
                        .required("Requerido"),
                    password1: Yup.string()
                        .min(6, 'Debe de tener minimo 6 caracteres')
                        .required("Requerido"),
                    password2: Yup.string()
                        .min(6, 'Debe de tener minimo 6 caracteres')
                        .required("Requerido")
                        .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden'),
                })}>
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput label='name' name='name' placeholder='Gustavo Ortiz'></MyTextInput>
                            <MyTextInput label='email' name='email' type='email' placeholder='correo@correo.com' ></MyTextInput>
                            <MyTextInput label='password1' name='password1' type='password' placeholder='*****'></MyTextInput>
                            <MyTextInput label='password2' name='password2' type='password' placeholder='*****'></MyTextInput>

                            <button type='submit' > Create</button>
                            <button type='button' onClick={handleReset} > Reset</button>

                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}
