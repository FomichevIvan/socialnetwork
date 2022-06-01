import React from 'react';
import PostContainer from './components/containers/PostContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className={'main-cont'}>
        <PostContainer />
        {/*{errr && <Toast/>}*/}
      </div>
    </div>
  );
}

export default App;
