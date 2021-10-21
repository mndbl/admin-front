export const CampoInput = ({type, label, text}) => {
    return (
        <div>
            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor={label}>{label}</label>
            {type === "number" ?

            <input id={label} type={type} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
            placeholder={text} step="0.01" min="0"/> :
            <input id={label} type={type} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
            placeholder={text}/>}
        </div>
    )
}