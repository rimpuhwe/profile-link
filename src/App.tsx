import "./App.css";
import Social from "./social-link/social";
function App() {
  const names = ["Github", "Front-end Mentor","LinkedIn","twitter","instagram"];
  return (
    <div className="app">
      <Social names={names} />  
    </div>
  );
}
export default App;
