import React from 'react';
import { Link } from 'react-router-dom';

interface InterAppProps {
  children: React.ReactNode;
}

export default function Container(props: InterAppProps) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
        {props.children}
      </div>
    </>
  );
}
