import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYubPage = () => {
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Debe de tener 15 caracteres o mas")
                .required("Requerido"),
            lastName: Yup.string()
                .max(10, "Debe de tener 10 caracteres o mas")
                .required("Requerido"),
            email: Yup.string()
                .email("El formato de email, no tiene un formato válido")
                .required("Requerido"),
        })
    })

    return (
        <div>
            <h1>Formik Yub</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type='text' {...getFieldProps('firstName')}
                    placeholder='Nombre'
                // name='firstName'
                // onBlur={handleBlur}
                // value={values.firstName}
                // onChange={handleChange}
                ></input>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input
                    type='text' {...getFieldProps('lastName')}
                    placeholder='Apellidos'
                // name='lastName'
                // onBlur={handleBlur}
                // value={values.lastName}
                // onChange={handleChange}
                ></input>

                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input
                    type='email'  {...getFieldProps('email')}
                    placeholder='email'
                // name='email'
                // onBlur={handleBlur}
                // value={values.email}
                // onChange={handleChange}
                ></input>
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit' > submit</button>
            </form>
        </div>
    )
}
