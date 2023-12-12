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

export const postCommentToArticle = (article_id, comment) => {
    return newsApi.post(`/api/articles/${article_id}/comments`, comment)
    .then(({data}) => {
        return data.comment
    })
}