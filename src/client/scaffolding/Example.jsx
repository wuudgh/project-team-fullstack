import { handleLogin, handleRegister } from "./authFunctions";
import UserForm from "./UserForm";

function ExampleLoginComponent() {
    return (
        <>
            <UserForm handleSubmit={handleLogin} />
        </>
    )
}

function ExampleRegisterComponent() {
    return (
        <>
            <UserForm handleSubmit={handleRegister} />
        </>
    )
}