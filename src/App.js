import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from './data.js';

function App() {
  const cards = data.map(card => {
    return (<Card key={card.id} item= {card} />)
    })
  return (
      <div className="App">
          <Navbar />
          <Hero />
          <section className="card--list">
            {cards}
          </section>
          
      </div>
  );
}

export default App;
