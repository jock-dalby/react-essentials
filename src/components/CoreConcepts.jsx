import CoreConcept from './CoreConcept';
import {CORE_CONCEPTS} from '../data'

const CoreConcepts = () => {
    return (
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map(props => (<CoreConcept key={props.title} {...props}/>))}
        </ul>
    </section>
    )
}

export default CoreConcepts;
