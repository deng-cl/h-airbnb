import http from "../request"

export const getEntireData = (offset = 0, size = 20) => {
    return http.get("/entire/list", {
        params: { offset, size }
    })
}
