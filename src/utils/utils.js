import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://gilaines-news-server.onrender.com'
})

newsApi.interceptors.request.use(
    function (config){
        return config
    }, function (error) {
        console.log(error.config.msg)
        return Promise.reject(error.request.data.msg)
    })

newsApi.interceptors.response.use(
    function (response){
        return response
    }, function (error) {
        if (error.code === "ERR_NETWORK") {
            return Promise.reject('Server error')
        } else {
            return Promise.reject(error.response.data.msg)
        }
    })

export const getArticles = (params) => {
    return newsApi.get('/api/articles', params)
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

export const postCommentToArticle = (article_id, comment) => {
    return newsApi.post(`/api/articles/${article_id}/comments`, comment)
    .then(({data}) => {
        return data.comment
    })
}

export const getUser = (username) => {
    return newsApi.get(`/api/users/${username}`)
    .then(({data}) => {
        return data.user
    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/api/comments/${comment_id}`)
}

export const getTopics = () => {
    return newsApi.get('/api/topics')
    .then(({data}) => {
        return data.topics
    })
}