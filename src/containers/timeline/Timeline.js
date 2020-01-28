import React, { Fragment, useEffect, useCallback, useState } from 'react'
import { Container } from '@material-ui/core'

import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import { getPost } from '../../services/post'
import Upload from '../../components/upload/Upload'


import './Timeline.css'



const Timeline = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = useCallback(async () => {
        const response = await getPost()
        console.log(response)
        setPosts(response.data)
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    return (
        <Fragment>
            <Header />
            <Container className='timeline'>
                <Upload />
                { posts.map(post => { return (<Post key={post._id} post={post} />) }) }
            </Container>
        </Fragment>
    )
}

export default Timeline