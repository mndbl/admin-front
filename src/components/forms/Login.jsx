import { SmCard } from "../cards/SmCard";
import { BackLayout } from "../layouts/BackLayout";
import Button from '@mui/material/Button';


export function Login() {
    return (
        <BackLayout>
            <SmCard text="Login">
                <form>
                    <div className="mt-4">
                        

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        
                    </div>

                    <div className="flex justify-end mt-6">
                        <Button variant="contained"
                        onClick={()=>alert('click')}>Enviar</Button> 
                    </div>
                </form>
            </SmCard>
        </BackLayout>
    )
}

