import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div
        style={{
          flex: '1',
          padding: '10px',
        }}
      >
        <UserProfile
          name="John Doe"
          age={30}
          bio="Loves traveling and photography."
        />
        <Counter />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;