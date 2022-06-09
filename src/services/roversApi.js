import axios from 'axios';

const API_KEY = 'ehZwOo8rreqdAS6moCnXC8ysqCHe3N3cGdYzk1Ik';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

async function FetchRoverFotos(page, name, sol) {
  try {
    const config = {
      url: `/rovers/${name}/photos?sol=${sol}`,
      params: {
        page,
      },
    };
    const { data } = await axios(config, page);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}
async function FetchRoverTotal(name) {
  try {
    const config = {
      url: `/manifests/${name}`,
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function fetchRovers() {
  try {
    const config = {
      url: `/rovers`,
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

const api = {
  FetchRoverFotos,
  FetchRoverTotal,
  fetchRovers,
};

export default api;
