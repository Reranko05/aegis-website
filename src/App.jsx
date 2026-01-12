import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        {/* You can add more sections here later */}
      </main>
      <Footer />
    </div>
  );
}

export default App;