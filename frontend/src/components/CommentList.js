import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} style={styles.comment}>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
}

const styles = {
    comment: {
        border: '1px solid #f06292',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '5px',
        backgroundColor: '#fce4ec'
    }
};

export default CommentList;
