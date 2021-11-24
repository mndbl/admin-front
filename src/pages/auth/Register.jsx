import AuthLayout from "../../components/layouts/AuthLayout";
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, userSelector, clearState } from '../../features/Users/UserSlice'
import { useForm } from "react-hook-form";
import { labelFormClass, inputsFormClass, buttonAuthClass } from '../../assets/styles/tailwindClass'
import { useHistory } from "react-router-dom";

export default function Register() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const {isFetching, isSuccess, isError,errorMessage}= useSelector(userSelector)
    const onRegister = (data) => {
        dispatch(registerUser(data))
    }
    return (
        <AuthLayout text="Registrarse" >
            <form
                className="space-y-6"
                onSubmit={handleSubmit(onRegister)}
                method="POST"
            >
                <div>
                    <label
                        htmlFor="name"
                        className={labelFormClass}
                    >
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            {...register("name")}
                            required
                            className={inputsFormClass}
                        />
                    </div>
                </div>
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
                            required
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
                            required
                            className={inputsFormClass}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className={buttonAuthClass}
                    >
                        {/* {isFetching ? (
                            <svg
                                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : null} */}
                        Register
                    </button>
                </div>
            </form>
        </AuthLayout>
    )
}
