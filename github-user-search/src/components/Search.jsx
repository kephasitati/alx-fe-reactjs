import { useState } from 'react';
// Import fetchUserData in Step 2

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setLoading(true);
    setError(null);
    setUserData(null);
    // API call will go here in Step 2
    setLoading(false); 
  };

  // Conditional rendering will go here in Step 3

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Search
        </button>
        {/* Results display will go here */}
      </form>
      {/* ... (form and button) */}

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}
      {userData && (
        <div className="mt-4 p-4 border border-gray-300 rounded bg-white text-center">
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-2" />
          <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            View GitHub Profile
          </a>
        </div>
      )}
    </>
  );
}

export default Search;