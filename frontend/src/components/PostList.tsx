import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { Post } from '../types/post';
import { Link } from 'react-router-dom';



const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchPosts()
    .then(setPosts)
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  }, []);
  
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete?')) return;
  
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
  
    setPosts(posts.filter(p => p.id !== id));
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts</h2>
        <Link to="/posts/new">➕ Add New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> (User ID: {post.userId})
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>🗑 Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
