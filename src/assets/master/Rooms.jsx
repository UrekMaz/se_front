import React from 'react';
import FloorOptions from '../Components/Rooms Components/FloorOptions';
import FloorListMaster from './FloorListMaster';
import TopNavBar from '../Components/TopNavBar';

function Rooms() {
  return (
    <>
      <TopNavBar name="Room Service" />
      <FloorOptions />
      <FloorListMaster />
      {/* Remove or comment out any additional instances */}
    </>
  );
}

export default Rooms;

