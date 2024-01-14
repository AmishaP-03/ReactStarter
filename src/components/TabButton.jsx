export default function TabButton(props) {
    function handleClickEvent() {
        console.log('Button clicked!');
    }
    return (
        <li>
            <button onClick={handleClickEvent}>{props.children}</button>
        </li>
    );
}