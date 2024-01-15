import CoreConcept from './CoreConcept.jsx';

// Since it is a named export and not a default export, we will use curly brackets with its name while importing it
import {
    CORE_CONCEPTS
  } from '../data.js';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {/* Attributes like title, description which are passed to a react component are known as props */}

          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description} 
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description} 
            image={CORE_CONCEPTS[1].image}
          /> */}

          {/* Shorter alternative:
          <CoreConcepts {...CORE_CONCEPTS[0]}/> */}

          {/* <CoreConcept
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description} 
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}

          {/* Dynamic rendering of list of data  */}
          {/* Every child in the list should have a unique 'key' prop warning comes on console. To remove it, add a key prop and assign title value to it. */}
          {CORE_CONCEPTS.map((coreConcept) => (<CoreConcept key={coreConcept.title} {...coreConcept} />))}
        </ul>
      </section>
    );
}