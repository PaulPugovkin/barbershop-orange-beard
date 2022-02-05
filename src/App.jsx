import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Benefits from './Components/Benefits';

const App = () => {
    return (
        <div
            style={{
                backgroundColor: '#0d0d0d',
                overflowX: 'hidden',
            }}
        >
            <Header />
            <main>
                <Hero />
                <About />
                <Benefits />
            </main>
        </div>
    );
};

export default App;
