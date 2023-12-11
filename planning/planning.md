# News Site Planning

## User Stories

- As a user I can see a list of all articles
- As a user I can read a single article
- As a user I can view comments associated with an article
- As a user I can vote on an article
- As a user I can post a comment to an article
- As a user I can delete a comment I have posted
- As a user I can view and select a topic
- As a user I can set how articles are sorted
- As a user I can see errors when I:
    - enter a non-existent path
    - try to access a non-existent articles
    - try to view a non-existent topic
    - try to post a comment without all the correct info
- As a user I can customise the view and functionality of the site for my accessibility needs
- As a user I can view and interact with the site on a range of devices
- As a user I can know when data is loading
- As a user I can understand intuitively how to navigate the site
- As a user I can undo actions such as accidental upvoting
- As a user I can log in, and know I am logged in
- As a user I can post a new topic
- As a user I can post an article
- As a user I can delete an article I have posted
- As a user I can vote on a comment

## Endpoints

- /api/topics – GET, POST
- /api/articles – GET, POST
- /api/articles/:article_id – GET, DELETE, (PATCH)
- /api/articles/:article_id/comments – GET, POST
- /api/users - GET
- /api/users/:username – GET
- /api/comments/:comment_id – PATCH, DELETE


## Routes (refer to wireframe)

- ‘/’ - Home view (shows articles overview)
- ‘/topics’ – Topics view
- ‘/articles?:query’ – filtered articles view
- ‘/articles/:article_id’ – single article view (with comments)
- ‘/articles/add-article’ – Add Article view
- ‘/profile’ – User view (login + profile)