import reactHeaderImg from '../../assets/react-core-concepts.png';

// To include the css file for this component in the loaded webpage:
// Importing a css file in a component does not limit the scope of its properities to that component. Thus, all the stylings defined in Header.css would reflect across all the files in the project.
import './Header.css';

const reactDescriptions = ['Fundamentals', 'Crucial', 'Core'];

function generateRandomInteger(max) {
  // The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
  return Math.floor(Math.random() * (max+1));
}

// React components, which are really just JS functions
// Export it so that it can be used in other files. Conventionally we mark it as a default export, so we can directly import it without having to use {}
export default function Header() {
    const description = reactDescriptions[generateRandomInteger(2)];
    return (
      <header>
        {/* Not the best way of loading images. 
        Pointing to the images in src/assets folder might cause the images to be lost once we prepare the React project for deployment.
        As part of the deployment process (build process to create deployable files), the code will be transformed, optimized and bundled together.
        Image files when loaded like this might get ignored in this process, and thus be lost during deployment.
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
  
        {/* Better way would be to import the required images. Build process will make sure that is it available in the deployment stage. */}
        <img src={reactHeaderImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }