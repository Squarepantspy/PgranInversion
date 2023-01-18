
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="container">
      <PersonCard firstName={"Pablo"} lastName={"Gonzalez"} hairColor={"Negro"} age={28}/>
      <PersonCard firstName={"Araceli"} lastName={"Sanchez"} hairColor={"Negro"} age={29}/>
      <PersonCard firstName={"Rhaenyra"} lastName={"Targaryen"} hairColor={"Blonde"} age={28}/>
      <PersonCard firstName={"Amy"} lastName={"Santiago"} hairColor={"Negro"} age={35}/>
    </div>
  );
}

export default App;
