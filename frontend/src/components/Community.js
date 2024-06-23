
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PostForm from './PostForm';
import PostList from './PostList';

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [userLikes, setUserLikes] = useState(new Set());
    const [userDislikes, setUserDislikes] = useState(new Set());

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };

    const addComment = (postId, comment) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, comments: [comment, ...post.comments] } : post
        ));
    };

    const likePost = (postId) => {
        if (userLikes.has(postId)) return;

        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1, dislikes: post.dislikes - (userDislikes.has(postId) ? 1 : 0) } : post
        ));
        setUserLikes(new Set(userLikes).add(postId));
        setUserDislikes(new Set([...userDislikes].filter(id => id !== postId)));
    };

    const dislikePost = (postId) => {
        if (userDislikes.has(postId)) return;

        setPosts(posts.map(post =>
            post.id === postId ? { ...post, dislikes: post.dislikes + 1, likes: post.likes - (userLikes.has(postId) ? 1 : 0) } : post
        ));
        setUserDislikes(new Set(userDislikes).add(postId));
        setUserLikes(new Set([...userLikes].filter(id => id !== postId)));
    };

    return (
        <div>
               <Header />
        <div style={styles.app}>
         
            <div style={styles.container}>
                <PostForm addPost={addPost} />
                <PostList
                    posts={posts}
                    addComment={addComment}
                    likePost={likePost}
                    dislikePost={dislikePost}
                    userLikes={userLikes}
                    userDislikes={userDislikes}
                />
            </div>
        </div>
        <Footer />
        </div>
    );
};

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fce4ec',
        minHeight: '100vh',
        padding: '20px'
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
    }
};

export default Community;
