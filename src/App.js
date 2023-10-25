import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import PortraitZaferes from './images/KatieZaferes.jpeg';
import WeddingPhoto from './images/weddingPhoto.jpeg';
import MountainBike from './images/mountainBiking.jpeg';

function App() {
  return (
      <div className="App">
          <Navbar />
          <Hero />
          <div className="card--container">
            <Card 
              img={PortraitZaferes}
              rating='5.0'
              reviewCount={6}
              country='USA'
              title='Life lessons with Katie Zaferes'
              price={136}
             />
          <Card 
              img={WeddingPhoto}
              rating='4.6'
              reviewCount={30}
              country='USA'
              title='Learn wedding photography'
              price={125}
             />
          <Card 
              img={MountainBike}
              rating='4.8'
              reviewCount={2}
              country='USA'
              title='Group Mountain Biking'
              price={50}
             />
          </div>
          
      </div>
  );
}

export default App;
