import React from 'react';
import './index.css';
import Login from './components/login/Login.jsx';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(<Login/>);