import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from './container';
import './styles/index.css';

const container = window.document.getElementById('root');
const root = createRoot(container!);

root.render(<Container />);
