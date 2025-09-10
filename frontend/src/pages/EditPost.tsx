import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    });

    navigate('/posts');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Edit Post</h2>
      <div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Body"
        />
      </div>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
