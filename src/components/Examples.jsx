import { useState } from "react";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState('components');

    const handleClick = (tabLabel) => {
        setSelectedTopic(tabLabel);
    }

    const buttons = Object.keys(EXAMPLES).map((title) => <TabButton key={title} isActive={selectedTopic === title} onClick={() => handleClick(title)}>{EXAMPLES[title].title}</TabButton>);
        
    return (
        <Section id="examples" title="Examples">
          <Tabs buttons={buttons}>
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
          </Tabs>
        </Section>
    )   
}

export default Examples;