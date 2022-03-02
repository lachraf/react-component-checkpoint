import "./App.css";
import "./styles.css";
import Card from "./Components/Profile/Card";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <div className="port">
        <ProfilePhoto />
        <FullName />
        <Address />
        <Card />
      </div>
    </div>
  );
}

export default App;

