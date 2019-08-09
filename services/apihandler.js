import 'isomorphic-unfetch';

const GETMOVIES_URI = 'https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20';
const DETAILS_URI = 'https://cdn-discover.hooq.tv/v1.2/discover/titles/';

const fetchWithErrorHandling = async url => {
    try {
        return await (await fetch(url)).json();
    } catch (err) {
        return { error: true };
    }
}

export const getMovies = async () => fetchWithErrorHandling(`${GETMOVIES_URI}`);

export const getMovieDetails = async id => fetchWithErrorHandling(`${DETAILS_URI}${id}`);

// export const getMovies = async () => {
//     return await (await fetch(`${GETMOVIES_URI}`)).json();
// };

// export const getMovieDetails = async id => {
//     return await (await fetch(`${DETAILS_URI}${id}`)).json();
// };