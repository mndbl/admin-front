import { useContext, useEffect } from "react";
import { SmCard } from "../../components/cards/SmCard";
import { BackLayout } from "../../components/layouts/BackLayout";
import UserContext from "../../context/User/UserContext";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

export function LoginPage() {
    const history = useHistory()

    const { login, auth } = useContext(UserContext);
    const handleLogin = ({ email, password }) => {
        login(email, password);
    }
    useEffect(() => {
        auth && history.push("/admin")
    }, [auth])
    return (
        <BackLayout>
            <SmCard text="Login">
                <LoginForm handleLogin={handleLogin} />
            </SmCard>
        </BackLayout>
    )
}

