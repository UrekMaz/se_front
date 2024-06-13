import * as React from "react";

function OrderCard({ orderNumber, imageSrc, items, totalCost, orderTime }) {
  return (
    <section className="order-card">
      <header className="order-header">
        <span className="order-number">{orderNumber}</span>
        <img loading="lazy" src={imageSrc} alt="" className="order-image" />
      </header>
  
  {items.map((i, index) => (
    <div className="order-items" key={index}>{`${i.qty}: ${i.item}`}</div>
  ))}


      <p className="order-cost">Total cost: ₹{totalCost}</p>
      <p className="order-time">
        Order placed: <time>{orderTime}</time>
      </p>
      <button className="print-button" type="button">
        Print
      </button>
    </section>
  );
}

export default function RestoPending() {
  const orders = [
    {
      orderNumber: "123",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      items:[{qty:1,item:"Cheese Burger"},{qty:1,item:"Pasta Algio Olio"}],
      totalCost: 250,
      orderTime: "3:24 p.m.",
    },
    {
      orderNumber: "124",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      items:[{qty:1,item:"Cheese Burger"},{qty:1,item:"Pasta Algio Olio"}],
      totalCost: 300,
      orderTime: "4:24 p.m.",
    },
    {
      orderNumber: "125",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      items:[{qty:1,item:"Cheese Burger"},{qty:1,item:"Pasta Algio Olio"}],
      totalCost: 350,
      orderTime: "5:24 p.m.",
    },
  ];

  return (
    <>
      <main className="orders-container">
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </main>
      <style jsx>{`
        .orders-container {
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          margin: 0 auto;
        }

        .order-card {
          border-radius: 12px;
          border: 1px solid rgba(205, 234, 207, 1);
          display: flex;
          flex-direction: column;
          padding: 0 0px 12px;
          margin-top: 24px;
          font-weight: 500;
          width:327px;
        }

        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 12px 12px 0 0;
          background-color: var(--Primary, #0d3f20);
          padding: 8px 24px;
          color: var(--White, #f9f9f9);
          font-size: 18px;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: -0.18px;
          line-height: 150%;
        }

        .order-number {
          font-family: Inter, sans-serif;
        }

        .order-image {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 24px;
          margin: auto 0;
          border: 2px solid rgba(249, 249, 249, 1);
        }

        .order-items,
        .order-cost,
        .order-time {
          color: var(--Black, #222);
          margin-top: 10px;
          font: 14px/20px Inter, sans-serif;
          
          display:flex;
          justify-content:flex-start;
          margin-left:12px;
          margin-bottom:0px;
          font-weight:bold;

        }

        .order-cost {
          margin-top: 15px;
          font: 400 13px/154% Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .order-time {
          margin-top: 10px;
          font: 400 12px/20px Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          letter-spacing: 0.25px;
        }

        .print-button {
          align-self: end;
          margin-top: 13px;
          margin-bottom:12px
         
          padding: 10px 16px;
          border: 1px solid rgba(13, 63, 32, 1);
          border-radius: 8px;
          color: var(--Primary, #0d3f20);
          font: 14px/140% Inter, sans-serif;
          background: none;
          cursor: pointer;
          margin-right:12px;
        }
        .order-items
        {
            list-style-type:none;
            display:flex;
            justify-content:flex-start;
            margin-left:12px;
            margin-top:10px;
            font-weight:bold;
        }
      `}</style>
    </>
  );
}