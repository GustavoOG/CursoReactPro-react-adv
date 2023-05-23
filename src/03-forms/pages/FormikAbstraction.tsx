import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput,MySelect,MyCheckbox } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstractation</h1>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }} onSubmit={(values) => {
                console.log(values);
            }} validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, "Debe de tener 15 caracteres o mas.")
                    .required("Requerido"),
                lastName: Yup.string()
                    .max(10, "Debe de tener 10 caracteres o mas.")
                    .required("Requerido"),
                email: Yup.string()
                    .email("El formato de email, no tiene un formato válido.")
                    .required("Requerido"),
                terms: Yup.boolean()
                    .oneOf([true], 'Debe de aceptar las condiciones.'),
                jobType: Yup.string()
                    .notOneOf(['it-jr', 'Esta opción no es permitida.'])
                    .required("Requerido")

            })
            }>
                {
                    formik => (
                        <Form >
                            <MyTextInput
                                label='First Name'
                                name='firstName' placeholder='Gustavo'></MyTextInput>

                            <MyTextInput
                                label='Last Name'
                                name='lastName' placeholder='Ortiz'></MyTextInput>

                            <MyTextInput
                                label='Email'
                                name='email' placeholder='jdxtavo@gmail.com' type="email"></MyTextInput>

                            <MySelect
                                label='Job Type'
                                name='jobType'>
                                <option value="">Pick something</option>
                                <option value="developer">developer</option>
                                <option value="Designer">Designer</option>
                                <option value="it-senior">it Senior</option>
                                <option value="it-jr">it Jr.</option>
                            </MySelect>

                            <MyCheckbox
                                label='Terms and conditions'
                                name='terms' ></MyCheckbox>

                            <button type='submit' > submit</button>
                        </Form>

                    )
                }


            </Formik>
        </div>
    )
}
