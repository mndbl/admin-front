import React from 'react';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const LoginForm = ({handleLogin}) => {
    const { register, handleSubmit } = useForm()
    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mt-4">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                    <input {...register('email')} required
                        id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                    <input {...register('password')} required
                        id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <Button variant="contained" type="submit">Enviar</Button>
            </div>
        </form>
    );
}

export default LoginForm;
