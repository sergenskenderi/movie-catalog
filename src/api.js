import axios from "axios";

export const fetchData = async (params = {}) => {
    try {
        params.apikey = process.env.REACT_APP_OMDB_API_KEY;
      return await axios.get(process.env.REACT_APP_OMDB_API, {params});
    } catch (error) {
        console.error('Error in fetchData:', error); 
    return error;
    }
};