import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { inputsFormClass, labelFormClass } from "../../../../assets/styles/tailwindClass";
import { SnackBar } from "../../../../components/partials/SnackBar";
import { Button } from "@mui/material";

export default function FormIngresosEgresos() {
    const [isFetching, setIsFetching] =useState(false)
    const history = useHistory()
    const { register, handleSubmit } = useForm()

    const onSubmitNewRegister =()=>{
        console.log('fetching');
        setIsFetching(true)
        setInterval(() => {
            setIsFetching(false)
        }, 3000);
    }

    return (
        <>
        {isFetching &&
            <SnackBar msgRcvd="Mensaje de Error" severity="error" />
        }
            <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmitNewRegister)}
                method="POST"
            >
                <div>
                    <label
                        htmlFor="email"
                        className={labelFormClass}
                    >
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            {...register('email', {
                                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                            })}
                            // required
                            className={inputsFormClass}
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className={labelFormClass}
                    >
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            {...register('password')}
                            autoComplete="current-password"
                            // required
                            className={inputsFormClass}
                        />
                    </div>
                </div>

                <div>
                    <Button variant="contained" color="primary" type="submit">
                        {isFetching ? (
                            <>
                                <svg
                                    className="mx-auto animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            </>
                        ) : <p>Sign in</p>}
                    </Button>
                </div>
            </form>
        </>
    )
}
