import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data'


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header () {
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandomInt(reactDescriptions.length)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept({title, description, image}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

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
