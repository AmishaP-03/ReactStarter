import { 
    useState // React hook
} from 'react';
// Since it is a named export and not a default export, we will use curly brackets with its name while importing it
import {
    EXAMPLES
} from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples() {
    // React hooks must be called only inside the component function or other react hooks, that too at the top level and not inside any nested code.
    // selectedValue is always recreated whenever setSelectedValue is called.
    const [selectedValue, setSelectedValue] = useState();

    function handleSelect(selection) {
        // Upon calling setSelectedValue here, React internally schedules the state update (& re-execute the App component (only Examples component post split) function).
        // This will happen only once the current function handleSelect finishes executing. Thus, upon logging selectedValue just after setSelectedValue function call,
        // we will still get the old values and not the updated ones.
        setSelectedValue(selection);
        console.log(selectedValue); // get old values only
    }

    const tabContent = selectedValue 
    ? (<div id="tab-content">
        <h3>{EXAMPLES[selectedValue].title}</h3>
        <p>{EXAMPLES[selectedValue].description}</p>

        {/* The <pre> tag defines preformatted text.
            Text in a <pre> element is displayed in a fixed-width font, and the text preserves both spaces and line breaks.
            The text will be displayed exactly as written in the HTML source code. */}
        <pre>
        {/* The <code> tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font. */}
        <code>{EXAMPLES[selectedValue].code}</code>
        </pre>
    </div>) 
    : (<p>Please select a topic</p>);

    return (
    // APPROACH 1 - All the tabs are handled here

    //     <Section title="Examples" id="examples">
    //     {/* Helps us create a list of buttons */}
    //     <menu>
    //       {/* Similar to how we use a regular button */}

    //       {/* We cannot pass parameters directly to handleSelect function here since that would mean that we are invoking the function when code executes for the first time itself.
    //       Whereas our aim is to trigger it only when a button is clicked. Hence we want React to call the function upon button click.

    //       In order to pass parameters to the handleSelect function:
    //       1. Set the value of onSelect prop to an arrow function instead (or use anonymous function like: <TabButton onSelect={function(){handleSelect}}>Components</TabButton>)
    //       2. Pass params to handleSelect function

    //       This will make sure that upon button click, React will invoke the set arrow function, which will in turn invoke the handleSelect function with parameters. */}
    //       <TabButton isSelected={selectedValue === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
    //       <TabButton isSelected={selectedValue === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
    //       <TabButton isSelected={selectedValue === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
    //       <TabButton isSelected={selectedValue === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>

    //       {/* Using props wrapping to even simplify the above procees. Need not create a new attribute onSelect. We can directly defined onClick here and pass it by wrapping to the child component.
    //             <TabButton isSelected={selectedValue === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>

    //             In TabButton component:

    //             export default function TabButton({isSelected, children, ...props}) {
    //                 return (
    //                     <li>
    //                         <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    //                     </li>
    //                 );
    //             }
    //       */}
    //     </menu>

    //     {/* Get updated values here, since App component is re-executed after each update */}
    //     {/* {selectedValue} */}
    //     {tabContent}
    //   </Section>

    // APPROCH 2 - Using a child component
    <Section title="Examples" id="examples">
        {/* JSX code can be used as values, the only thing is that whenever it is, we should have one root element only (<></>), not multiple sibling elements */}
        {/* in-built components are passed in double quotes whereas custom components are passed as dynamic values, buttonContainer = {Section}. They is because they are basically user defined variables from which the value is supposed to be picked up. */}
        <Tabs butttonContainer="menu" buttons={<>
            <TabButton isSelected={selectedValue === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedValue === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedValue === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedValue === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </>}>
            {tabContent}
        </Tabs>
    </Section>
    );
}