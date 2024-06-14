import React from 'react';
import FloorOptions from '../Components/Rooms Components/FloorOptions';
import FloorList from '../Components/Rooms Components/FloorList';
import TopNavBar from '../Components/TopNavBar';

function BillFor() {

  return (
      <>
        <TopNavBar name="Bill for" hamburger="master"/>
        <FloorOptions />
        <FloorList />
        <FloorList />
        {/* <h1>It is working</h1> */}
      </>
  );
}

export default BillFor;
