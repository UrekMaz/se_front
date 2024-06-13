import * as React from "react";

export default function OrderSection({message}) {
    return (
      <>
        <section className="order-section">
          <h1 className="order-title">{message}</h1>
        </section>
  
        <style jsx>{`
          .order-section {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left:20px;
            border-radius: 8px;
            background-color: var(--Primary, #0d3f20);
            max-width: 320px;
            color: #fff;
            padding: 10px 20px;
            font: 500 14px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
            height:40px;
            width:210px;
            margin-right:100px;
          }
          .order-title {
            margin: 0;
          font-size:20px;
          }
        `}</style>
      </>
    );
  }