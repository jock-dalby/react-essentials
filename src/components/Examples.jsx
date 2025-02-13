import { useState } from "react";
import Section from "./Section";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState('components');

    const handleClick = (tabLabel) => {
        setSelectedTopic(tabLabel);
    }
        
    return (
        <Section id="examples" title="Examples">
          <menu>
            {Object.keys(EXAMPLES).map((title) => <TabButton key={title} isActive={selectedTopic === title} onClick={() => handleClick(title)}>{EXAMPLES[title].title}</TabButton>)}
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </Section>
    )   
}

export default Examples;