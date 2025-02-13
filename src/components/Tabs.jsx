const Tabs = ({ buttons, children, ButtonContainerElem }) => {
    // component identifier passed in arg can be "menu", "ul", "div" etc.
    // custom components must be passed in dynamically e.g. {Section}, {Examples} etc.
    // Prop must start with uppercase.
    return (
        <>
            <ButtonContainerElem>
                {buttons}   
            </ButtonContainerElem>
            {children}
        </>
    )
}

export default Tabs;