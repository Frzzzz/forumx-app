import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Main from '../components/Main';

function HomePage() {
  return (
    <>
      <Header />
      <Loading />
      <Main />
    </>
  );
}

export default HomePage;
