import axios from 'axios';

const headers = {
   'Accept' : 'application/json'
};
 
let Api = axios.create({  
    baseURL : 'https://mayweatherdeals.com', 
    headers : headers
});    

Api.defaults.withCredentials = true;
// Api.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost/3000' 
export default Api; 