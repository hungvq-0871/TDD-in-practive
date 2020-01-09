import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import BackGround from './components/BackGround';

function ToDoListPage() {
  return (
    <BackGround>
      <Header />
      <Body />
    </BackGround>
  )
}

export default ToDoListPage;
