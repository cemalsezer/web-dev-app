import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          body,
          userId: Number(userId),
        }),
      });

      if (!res.ok) throw new Error('Failed to create post');
      navigate('/posts');
    } catch (error) {
      console.error('Add post error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Add New Post</h2>
      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="User ID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          type="number"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;
