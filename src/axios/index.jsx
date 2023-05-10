import axios from 'axios';  

export default axios.create({ 
  baseURL: "https://blackoffer.onrender.com/api", //for production mode 
  // baseURL: "http://localhost:8000/api", //for developement mode 
  headers: {
    "Content-type": "application/json",
  }
});
