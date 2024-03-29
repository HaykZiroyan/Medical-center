import React from 'react';

const Posts = ({ posts, loading, data }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {/* {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))} */}
    {data.about.title}
    </ul>
  );
};

export default Posts;
