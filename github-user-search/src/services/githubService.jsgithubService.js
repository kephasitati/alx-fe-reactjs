import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  const token = import.meta.env.VITE_GITHUB_API_TOKEN;
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};