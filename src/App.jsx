import {CORE_CONCEPTS} from './data'
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
