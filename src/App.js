import './App.css';
import WaitList from "./components/waitList";
import NavBar from "./components/navbar";
import LandingPage1 from './components/landingPage1';
import InfoSection from './components/infoSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <WaitList />
        <NavBar />
        <LandingPage1 />
        <InfoSection />
        <Footer/>
    </div>
  );
}

export default App;
