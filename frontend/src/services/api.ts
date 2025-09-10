import { User } from '../types/user';
import { Post } from '../types/post';

// export const fetchUsers = async (): Promise<User[]> => {
//   const res = await fetch('http://localhost:3000/users');
//   if (!res.ok) throw new Error('Failed to fetch users');
//   return res.json();
// };

// export const fetchPosts = async (): Promise<Post[]> => {
// const res = await fetch('http://localhost:3000/posts');
//   if (!res.ok) throw new Error('Failed to fetch posts');
//   return res.json();
// };


const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};