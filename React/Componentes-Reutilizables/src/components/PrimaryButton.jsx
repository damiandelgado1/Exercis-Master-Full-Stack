const PrimerButton = ({
    onMyClic,
    children,
}) => {
    return (
        <button
            onClic={onMyClic}
            className="bg-blue-900 text-white p-2 rounded-md cursor-pointer mb-10"
        >
            {children}
        </button>
    )
}