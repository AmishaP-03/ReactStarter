// Passing props wrapped in an object
export default function Section({title, children, ...props}) {
    return (
        // To automatically appply all the remaining props on section
        <section {...props}>
            <h2>Examples</h2>
            {children}
        </section>
    );
}