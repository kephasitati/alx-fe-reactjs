import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query, location = '', minRepos = '', page = 1, perPage = 30) => {
  const token = import.meta.env.VITE_GITHUB_API_TOKEN;
  let searchQuery = query || '';
  if (location) searchQuery += `+location:${location}`;
  if (minRepos) searchQuery += `+repos:>${minRepos}`;
  
  try {
    const response = await axios.get(GITHUB_API_URL, {
      params: {
        q: searchQuery,
        page,
        per_page: perPage,
      },
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};