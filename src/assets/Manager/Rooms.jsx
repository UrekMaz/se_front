import React from 'react';
// import FloorList from './Manager/FloorList';
import FloorOptions from './FloorOptions';
import FloorList from './FloorList';
import TopNavBar from './TopNavBar';

function Rooms() {

  return (
      <>
        <TopNavBar name="Room Service" />
        <FloorOptions />
        <FloorList />
        <FloorList />
        {/* <h1>It is working</h1> */}
      </>
  );
}

export default Rooms;
