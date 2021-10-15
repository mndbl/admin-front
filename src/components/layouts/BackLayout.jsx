export function BackLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
            style={styles}>
            {children}
        </div>
    )
}
const styles = {
    backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80' + ')',
}