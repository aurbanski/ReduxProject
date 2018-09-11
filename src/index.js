import {createPost, editPost, setFilter} from './actions'
import appReducer from './reducers'
import {createStore} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

// let store = createStore(appReducer)

// const unsubscribe = store.subscribe(() => {
//     console.log('state changed: ', store.getState())
// })

// const root = document.getElementById('root')

// const render = () => {
//     root.innerHTML = ''
//     const {posts} = store.getState()
//     posts.forEach((post, index) => {
//         const item = document.createElement('li')
//         item.addEventListener('click', () => 
//             store.dispatch(editPost(index, (post.text + '!')))
//         )
//         const text = document.createTextNode(post.user + ' - ' + post.text)
//         item.appendChild(text)
//         root.appendChild(item)
//     })
// }

// const stopRender = store.subscribe(render)

// store.dispatch(createPost('dan', 'hello world'))
// store.dispatch(createPost('des', 'second post'))

ReactDOM.render(
    <h1>hello world!</h1>,
    document.getElementById('root')
)