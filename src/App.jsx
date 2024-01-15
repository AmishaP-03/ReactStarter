import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    // This div is the parent element that wraps the sibling elements Header and main, so that only a single value is returned.
    // If this div is not used, then it would impl that the App function is trying to return 2 values: Header and main, which is not allowed.
    // It is however unnecessary in DOM, hence react gives us an alternative for it: 'Fragment component'
    // <Fragment>...code</Fragment>
    // Below is an even simplified version of it
    <>
      {/* JSX allows us to use custom components as HTML elements */}
      <Header></Header>
      {/* (or use a self closing tag like: <Header />) */}

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
