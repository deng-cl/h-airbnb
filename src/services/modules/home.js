import http from "../request";

export const getHomeGoodPriceInfo = () => {
    return http.get("/home/goodprice")
}

export const getHomeHighScoreInfo = () => {
    return http.get("/home/highscore")
}

export const getHomeDiscountInfo = () => {
    return http.get("/home/discount")
}

export const getHomeHotRecommendInfo = () => {
    return http.get("/home/hotrecommenddest")
}

export const getHomeLongforInfo = () => {
    return http.get("/home/longfor")
}

export const getHomePlusInfo = () => {
    return http.get("/home/plus")
}
