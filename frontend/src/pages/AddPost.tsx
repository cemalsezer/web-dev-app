import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        body,
        userId: Number(userId),
      }),
    });

    navigate('/posts');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Yeni Post Ekle</h2>
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
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddPost;
