import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://gilaines-news-server.onrender.com'
})

export const getArticles = () => {
    return newsApi.get('/api/articles').then(({data}) => {
        return data.articles
    })
}