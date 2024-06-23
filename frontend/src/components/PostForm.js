
import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ title, content, id: Date.now(), comments: [], likes: 0, dislikes: 0 });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
            />
            <textarea
                placeholder="Post Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={styles.textarea}
            />
            <button type="submit" style={styles.button}>Add Post</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px'
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #f06292'
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #f06292'
    },
    button: {
        padding: '10px',
        backgroundColor: '#f06292',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

export default PostForm;
