export function SmCard({children, text}) {
    return (
        <div className="w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="-mt-8 bg-blue-500 max-w-xs mx-auto py-4 rounded-lg text-white text-center font-bold text-xl">{text}</div>
            {children}
        </div>
    )
}