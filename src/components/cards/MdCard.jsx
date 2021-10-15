export function MdCard({children, text}) {
    return (
        <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
             <div className="-mt-8 bg-blue-500 max-w-md mx-auto py-4 rounded-lg text-white text-center font-bold text-xl mb-4">{text}</div>
            {children}
        </div>
    )
}