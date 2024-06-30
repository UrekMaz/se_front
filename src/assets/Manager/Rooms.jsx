import React from 'react';
// import FloorList from './Manager/FloorList';
import FloorOptions from '../Components/Rooms Components/FloorOptions';
import FloorList from '../Components/Rooms Components/FloorList';
import TopNavBar from '../Components/TopNavBar';

function Rooms() {

  return (
      <>
        <TopNavBar name="Room Service" />
        <FloorOptions />
        <FloorList />
        {/* <FloorList /> */}
        {/* <h1>It is working</h1> */}
      </>
  );
}

export default Rooms;
