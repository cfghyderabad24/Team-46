
import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(postId, { content: comment, id: Date.now() });
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <textarea
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={styles.textarea}
            />
            <button type="submit" style={styles.button}>Comment</button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px'
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #f06292'
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#f06292',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

export default CommentForm;
