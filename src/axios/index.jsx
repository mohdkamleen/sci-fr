import axios from 'axios';  

export default axios.create({ 
  baseURL: "https://sic-bk.onrender.com/api", //for production mode 
  // baseURL: "http://localhost:8000/api" //for development mode
});
