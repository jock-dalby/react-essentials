import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const handleClick = () => {}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(props => (<CoreConcept {...props}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {['Components', 'JSX', 'Props', 'State'].map(label => <TabButton onClick={handleClick}>{label}</TabButton>)}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
