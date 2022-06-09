import axios from 'axios';

const API_KEY = 'ehZwOo8rreqdAS6moCnXC8ysqCHe3N3cGdYzk1Ik';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';
// ehZwOo8rreqdAS6moCnXC8ysqCHe3N3cGdYzk1I;
// function fetchPopularMovies(page) {
//   return fetch(
//     `${BASE_URL}trending/movies/week?api_key=${API_KEY}&page=${page}`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//   });
// }
// function fetchDetails(id) {
//   return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//   });
// }
// function fetchCast(id) {
//   return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`).then(
//     response => {
//       if (response.ok) {
//         return response.json();
//       }
//     }
//   );
// }
// function fetchReviews(id) {
//   return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`).then(
//     response => {
//       if (response.ok) {
//         return response.json();
//       }
//     }
//   );
// }
// function fetchMovies(movie, page) {
//   return fetch(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movie}&page=${page}`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//   });
// }

// const api = {
//   fetchPopularMovies,
//   fetchDetails,
//   fetchCast,
//   fetchReviews,
//   fetchMovies,
// };

// export default api;

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

async function fetchDetails(id) {
  try {
    const config = {
      url: `movie/${id}`,
    };
    const { data } = await axios(config, id);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function fetchCast(id) {
  try {
    const config = {
      url: `movie/${id}/credits`,
    };
    const { data } = await axios(config, id);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function fetchReviews(id) {
  try {
    const config = {
      url: `movie/${id}/reviews`,
    };
    const { data } = await axios(config, id);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

const api = {
  FetchRoverFotos,
  fetchDetails,
  FetchRoverTotal,
  fetchReviews,
  fetchRovers,
};

export default api;
