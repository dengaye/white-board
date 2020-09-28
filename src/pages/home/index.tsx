import React from 'react';

import style from './style.module.scss';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      This is home page.
      <div className={style.footer}>foot</div>
    </div>
  );
};

export default Home;
