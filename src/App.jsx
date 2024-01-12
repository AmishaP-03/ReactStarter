import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';

// Since it is a named export and not a default export, we will use curly brackets with its name while importing it
import {
  CORE_CONCEPTS
} from './data.js';

function App() {
  return (
    <div>
      {/* JSX allows us to use custom components as HTML elements */}
      <Header></Header>
      {/* (or use a self closing tag like: <Header />) */}
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {/* Attributes like title, description which are passed to a react component are known as props */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description} 
              image={CORE_CONCEPTS[1].image}
            />
            {/* Shorter alternative:
            <CoreConcepts {...CORE_CONCEPTS[0]}/> */}
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description} 
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          {/* Helps us create a list of buttons */}
          <menu>
            {/* Similar to how we use a regular button */}
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
