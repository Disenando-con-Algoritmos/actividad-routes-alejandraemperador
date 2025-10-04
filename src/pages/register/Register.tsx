import { Button, TextField } from "@mui/material";
import { useRef } from "react";

export default function Register() {
    const formRef = useRef(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formResponse = formRef.current;
        if (formResponse) {
            const formData = new FormData(formResponse);
            console.log(formData.get("username"), formData.get("password"));
            localStorage.setItem("username", formData.get("username") as string);
        }
    };

    return (
        <div id="login-page" className=" flex flex-col items-center min-h-screen bg-gray-500 text-white">
            <h1> Login Page! </h1>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center">
                <TextField required id="Username" label="Username" defaultValue="nombre usuario" />
                <TextField required id="Name" label="Name" defaultValue="Nombre completo" />
                <TextField type="password" variant="outlined" name="password" />
                <Button type="submit" variant="outlined">
                    {" "}
                    Iniciar sesion
                </Button>
            </form>
        </div>
    );
}
