import { SmCard } from "../../../components/cards/SmCard";
import Button from '@mui/material/Button';
import { styleInput } from "../../../assets/Styles";


export function FormUsers({text}) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <form>
                    <div className="mt-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" for="username">Username</label>
                            <input id="username" type="text" className={styleInput} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" className={styleInput} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" for="password">Password</label>
                            <input id="password" type="password" className={styleInput} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" for="passwordConfirmation">Password Confirmation</label>
                            <input id="passwordConfirmation" type="password" className={styleInput} />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <Button variant="contained"
                            onClick={() => alert('click')}>Enviar</Button>
                    </div>
                </form>
            </SmCard>
        </div>

    )
}

