import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://gilaines-news-server.onrender.com'
})

export const getArticles = () => {
    return newsApi.get('/api/articles')
    .then(({data}) => {
        return data.articles
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/api/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
} 

export const patchArticle = (article_id, vote) => {
    return newsApi.patch(`/api/articles/${article_id}`, vote)
    .then(({data}) => {
        return data.article
    })
}   
     

export const getArticleComments = (article_id) => {
    return newsApi.get(`/api/articles/${article_id}/comments `)
    .then(({data}) => {
        return data.comments
    })
}

export const getUserDetails = (username) => {
    return newsApi.get(`/api/users/${username}`)
    .then(({data}) => {
        return data.user
    })
}