import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'ac3313a676e14d1a895863b0b57d070a'
    }
})