import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <UserContext.Provider value={userData}>
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
          <ProfilePage />
          <MainContent />
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;