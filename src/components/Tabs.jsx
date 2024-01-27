export default function Tabs({children, buttons, butttonContainer="menu"}) {
    // Creating a custom component that contains the value present in buttonContainer
    const ButtonContainer = butttonContainer
    return (
        <>
        <ButtonContainer>{buttons}</ButtonContainer>
        {/* If we had used <butttonContainer>{buttons}</butttonContainer>, react would have started looking for a built-in container names buttonContainer, which obviously does not exist. */}
        {children}
        </>
    )
}