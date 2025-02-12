import { useState } from 'react';

import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  
  const [tabContent, setTabContent] = useState('Please click a button');

  const handleClick = (tabLabel) => {
    setTabContent(tabLabel);
  }

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
            {['Components', 'JSX', 'Props', 'State'].map(label => <TabButton onClick={() => handleClick(label)}>{label}</TabButton>)}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
