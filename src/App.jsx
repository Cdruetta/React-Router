import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserContainer from './components/users/UserContainer';
import { Menubar } from 'primereact/menubar';
import Home from './components/home';
import Posts from './components/posts/Posts'; 
import Albums from './components/albums/Albums'; 

function App() {
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/home' },
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' },
    { label: 'Posts', icon: 'pi pi-file', url: '/posts' },
    { label: 'Albums', icon: 'pi pi-images', url: '/albums' }, 
  ];

  return (
    <BrowserRouter>
      <Menubar model={items} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UserContainer />} />
        <Route path="/posts" element={<Posts />} /> 
        <Route path="/albums" element={<Albums />} /> 
      </Routes>

      <p className="read-the-docs">
        <h1>DRUETTZILLA</h1>
      </p>
    </BrowserRouter>
  );
}

export default App;
