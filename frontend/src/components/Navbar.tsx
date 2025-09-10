import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/users" style={styles.link}>Users</Link>
      <Link to="/posts" style={styles.link}>Posts</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '10px 20px',
    borderBottom: '1px solid #ddd',
  },
  link: {
    textDecoration: 'none',
    color: '#f6fcffff',
    fontWeight: 'bold',
  },
};

export default Navbar;
