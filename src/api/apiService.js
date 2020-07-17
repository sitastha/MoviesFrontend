const baseURL = "https://api.tvmaze.com/";

export const searchShows = async (searchText) => {
    const data = await fetch(`${baseURL}search/shows?q=${searchText}`);
    return data.json();
}

export const getShowDetail = async (id) => {
    const data = await fetch(`${baseURL}shows/${id}`);
    return data.json(); 
}
