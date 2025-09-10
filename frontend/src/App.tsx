import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import UserList from './components/UserList';
import PostList from './components/PostList';
import EditPost from './pages/EditPost';
import AddPost from './pages/AddPost';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/posts/new" element={<AddPost />} />

      </Routes>
    </div>
  );
};

export default App;
