const Tabs = ({ buttons, children }) => {
    return (
        <>
            <menu>
                {buttons}   
            </menu>
            {children}
        </>
    )
}

export default Tabs;