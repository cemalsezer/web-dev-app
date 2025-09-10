import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`);
        if (!res.ok) throw new Error('Failed to fetch post');
        const data = await res.json();
        setTitle(data.title);
        setBody(data.body);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      });

      if (!res.ok) throw new Error('Failed to update post');
      navigate('/posts');
    } catch (error) {
      console.error('Update error:', error);
    }
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
