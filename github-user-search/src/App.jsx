import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">GitHub User Search</h1>
      </header>
      <main className="flex-1 w-full max-w-4xl p-4">
        <Search />
      </main>
    </div>
  );
}

export default App;