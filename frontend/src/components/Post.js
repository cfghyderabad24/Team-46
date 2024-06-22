import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Post = ({ post, addComment, likePost, dislikePost, userLikes, userDislikes }) => {
    const [showComments, setShowComments] = useState(false);

    const handleLike = () => {
        likePost(post.id);
    };

    const handleDislike = () => {
        dislikePost(post.id);
    };

    return (
        <div style={styles.post}>
            <h2 style={styles.title}>{post.title}</h2>
            <p style={styles.content}>{post.content}</p>
            <div style={styles.actions}>
                <button onClick={handleLike} style={styles.button}>
                    <FaThumbsUp color={userLikes.has(post.id) ? '#f06292' : 'gray'} /> ({post.likes})
                </button>
                <button onClick={handleDislike} style={styles.button}>
                    <FaThumbsDown color={userDislikes.has(post.id) ? '#f06292' : 'gray'} /> ({post.dislikes})
                </button>
                <button onClick={() => setShowComments(!showComments)} style={styles.button}>
                    {showComments ? 'Hide Comments' : 'Show Comments'} ({post.comments?.length || 0})
                </button>
            </div>
            {showComments && (
                <div style={styles.commentsSection}>
                    <CommentForm postId={post.id} addComment={addComment} />
                    <CommentList comments={post.comments || []} />
                </div>
            )}
        </div>
    );
};

const styles = {
    post: {
        border: '1px solid #f06292',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '10px',
        backgroundColor: 'white'
    },
    title: {
        margin: '0 0 10px 0'
    },
    content: {
        margin: 0
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px'
    },
    button: {
        padding: '5px 10px',
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    commentsSection: {
        marginTop: '20px'
    }
};

export default Post;
