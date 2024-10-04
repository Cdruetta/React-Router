import { Fragment } from "react"
import { ProgressSpinner } from "primereact/progressspinner"

const UsersView = ({data, loadingData}) => {
   return (
    <Fragment>
        <h1>Usuarios</h1>        {loadingData ? (
            <ProgressSpinner />
        ) : (
            data.map((user) => (
                <div key={user.id}>
                    <h2 key={user.id}>{user.name}</h2>
                </div>
            ))
        )
        }
     </Fragment>  
     
   )
}
export default UsersView
