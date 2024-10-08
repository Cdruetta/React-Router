import {Field, ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'

const CreateUser = () => {
    
    
        const ValidationSchema= Yup.object().shape({
            email: Yup.string()
                .required('El correo es requerido')
                .email('El correo no es valido')
                .max(255, 'El correo no debe de exceder los 255 caracteres'),

            username: Yup.string()
                .min(5, 'El nombre de usuario debe de tener al menos 3 caracteres')
                .max(20, 'El nombre de usuario no debe de exceder los 20 caracteres')
                .required('El nombre de usuario es requerido'),
        })
    return (
        <Formik
            initialValues={{ email: '', username: '' }}
            validationSchema={ValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                console.log(values),
                <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                    type="texet"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                />
                {errors.username && touched.username && errors.username}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </form>
        )}
        </Formik>
)
    
}
export default CreateUser