import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use(res => res.data, err => err)
    }

    request(config) {
        return this.instance.request(config)
    }

    get(url, config) {
        return this.request({ ...config, url, method: "GET" })
    }

    post(url, config) {
        return this.request({ ...config, url, method: "POST" })
    }

    delete(url, config) {
        return this.request({ ...config, url, method: "DELETE" })
    }

    put(url, config) {
        return this.request({ ...config, url, method: "PUT" })
    }
}

const http = new HRequest(BASE_URL, TIMEOUT)

export default http
