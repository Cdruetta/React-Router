import {Field, ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'

const CreateUser = () => {
    const token = ``
    const RegisterUser = async (values) => {

        const bodyRegisterUser = {
            usermane: values.username,
            password: values.password
        }
        console.log("bodyRegisterUser",bodyRegisterUser)

        const responce = await fetch('http://127.0.0.1:5000//users', {
            method: 'POST', 
            body: JSON.stringify(bodyRegisterUser),
            headers: {
                "Content-Type": 'application/json',
                "Autorization": 'Bearer ${token}'
            }
            
        })

        console.log(responce)
    
    }
const ValidationSchema= Yup.object().shape({

            password: Yup.string()
                .required('este es un campo requerido')
                .min(5, 'esta contraseña debe de tener al menos 5 caracteres'),

            username: Yup.string()
                .min(5, 'El nombre de usuario debe de tener al menos 3 caracteres')
                .max(20, 'El nombre de usuario no debe de exceder los 20 caracteres')
                .required('El nombre de usuario es requerido'),
        })
    return (
        <Formik
            initialValues={{ password: '', username: '' }}
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
                isValid,
                /* and other goodies */
            }) => (
                console.log("isvalid", isValid) ,
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                />
                {errors.username && touched.username && errors.username}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="button" onClick={() => RegisterUser(values)} disabled={values.username === '' || values.password === '' || !isValid}>

                    Crear Usuario
                </button>
                </form>
        )}
        </Formik>
)
    
}
export default CreateUser