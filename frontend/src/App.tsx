import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import UserList from './components/UserList';
import PostList from './components/PostList';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </div>
  );
};

export default App;
