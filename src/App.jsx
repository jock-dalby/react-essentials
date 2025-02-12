import { useState } from 'react';

import {CORE_CONCEPTS, EXAMPLES} from './data'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  
  const [selectedTopic, setSelectedTopic] = useState('components');

  const handleClick = (tabLabel) => {
    setSelectedTopic(tabLabel.toLowerCase());
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(props => (<CoreConcept key={props.title} {...props}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.values(EXAMPLES).map(({title}) => <TabButton key={title} onClick={() => handleClick(title)}>{title}</TabButton>)}
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
