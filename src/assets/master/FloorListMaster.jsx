import React, { useEffect, useState } from 'react';
import './FloorList.css';

function Divider() {
  return <hr className="divider" />;
}

function FloorSection({ floor, numbers, onRoomClick }) {
  return (
    <section className="floor-section">
      <h2 className="floor-title">{floor}</h2>
      {numbers.map((num, index) => (
        <React.Fragment key={num}>
          <p className="floor-number" onClick={() => onRoomClick(num)}>{num}</p>
          {index < numbers.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  );
}

function FloorListMaster() {
  const [floorData, setFloorData] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch('http://localhost:3000/hotelroom');
        const data = await response.json();
        // Assuming data is an array of room objects with properties like room_no and occupied
        const groupedData = data.reduce((acc, room) => {
          const floor = `${Math.floor(room.room_no / 100)}th Floor`;
          if (!acc[floor]) acc[floor] = [];
          acc[floor].push(room.room_no);
          return acc;
        }, {});
        const formattedData = Object.keys(groupedData).map(floor => ({
          floor,
          numbers: groupedData[floor],
        }));
        setFloorData(formattedData);
      } catch (error) {
        console.error('Error fetching hotel rooms:', error);
      }
    }
    fetchRooms();
  }, []);

  const handleRoomClick = (roomNumber) => {
    window.location.href = `/billing?room=${roomNumber}`;
  };

  return (
    <main>
      {floorData.map((data, index) => (
        <FloorSection
          key={index}
          floor={data.floor}
          numbers={data.numbers}
          onRoomClick={handleRoomClick}
        />
      ))}
    </main>
  );
}

export default FloorListMaster;