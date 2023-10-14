import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'fdc5a017b5854b54b15bdc6008b4293f'
    }
});