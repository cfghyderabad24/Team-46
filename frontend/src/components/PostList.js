
import React from 'react';
import Post from './Post';

const PostList = ({ posts, addComment, likePost, dislikePost, userLikes, userDislikes }) => {
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    addComment={addComment}
                    likePost={likePost}
                    dislikePost={dislikePost}
                    userLikes={userLikes}
                    userDislikes={userDislikes}
                />
            ))}
        </div>
    );
};

export default PostList;
