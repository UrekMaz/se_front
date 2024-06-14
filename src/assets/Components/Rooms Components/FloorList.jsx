import React from 'react';
import './FloorList.css';

function Divider() {
  return <hr className="divider" />;
}

function FloorSection({ floor, numbers }) {
  return (
    <section className="floor-section">
      <h2 className="floor-title">{floor}</h2>
      {numbers.map((num, index) => (
        <React.Fragment key={num}>
          <p className="floor-number">{num}</p>
          {index < numbers.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  );
}

function FloorList() {
  const floorData = [
    { floor: "1st Floor", numbers: [123, 134, 145, 156] },
  ];

  return (
    <>
      <main>
        {floorData.map((data, index) => (
          <FloorSection key={index} floor={data.floor} numbers={data.numbers} />
        ))}
      </main>
    </>
  );
}

export default FloorList;