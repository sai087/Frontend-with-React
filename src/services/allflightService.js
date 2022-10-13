import axios from "axios";
const SEARCH_API_BASE_URL="http://localhost:9091/search";

class allflightService{
    getSearches(){
        return axios.get(SEARCH_API_BASE_URL + '/');
    }

    deleteSearch(Searchid){
        return axios.delete(SEARCH_API_BASE_URL + '/' + Searchid);
    }

    createSearch(Search){
        return axios.post(SEARCH_API_BASE_URL, Search);
    }
    getSearchById(SearchId){
        return axios.get(SEARCH_API_BASE_URL+ "/" + SearchId);
    }
    updateSearch(Search, SearchId){
        return axios.put(SEARCH_API_BASE_URL+ "/" + SearchId, Search);
    }
}

export default new allflightService()