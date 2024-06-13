import * as React from "react";

function Billing() {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          margin: 0 auto;
        }
        .billing-header {
          border: 1px solid rgba(229, 229, 229, 1);
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          font-size: 19px;
          color: var(--Black, #222);
          font-weight: 500;
          letter-spacing: -0.19px;
          line-height: 130%;
          justify-content: center;
          padding: 15px 19px;
        }
        .billing-details {
          justify-content: space-between;
          align-items: start;
          display: flex;
          padding-right: 10px;
          gap: 6px;
        }
        .icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .billing-title {
          font-family: Inter, sans-serif;
          align-self: stretch;
        }
        .content {
          display: flex;
          width: 100%;
          padding-left: 10px;
          flex-direction: column;
        }
        .total-section {
          justify-content: space-between;
          border: 1px solid rgba(230, 230, 230, 1);
          background-color: #fff;
          display: flex;
          gap: 12px;
          font-size: 16px;
          padding: 12px 20px;
        }
        .total-label {
          color: var(--Neutral-dark, #828282);
          font-family: Inter, sans-serif;
          font-weight: 600;
          line-height: 140%;
          letter-spacing: -0.48px;
        }
        .total-amount {
          color: var(--Black, #222);
          font-family: Inter, sans-serif;
          font-weight: 700;
          line-height: 110%;
          letter-spacing: -0.32px;
          margin: auto 0;
        }
        .print-container {
          align-items: end;
          display: flex;
          margin-top: 12px;
          flex-direction: column;
          font-size: 14px;
          color: var(--White, #f9f9f9);
          font-weight: 500;
          line-height: 140%;
          justify-content: center;
          padding: 0 12px;
        }
        .print-button {
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(13, 63, 32, 1);
          background-color: var(--Primary, #0d3f20);
          padding: 10px 16px;
          color: white;
        }
        .billing-info {
          display: flex;
          margin-top: 12px;
          padding-bottom: 80px;
          flex-direction: column;
        }
        .billing-card {
          border-radius: 24px;
          border: 1px solid rgba(205, 234, 207, 1);
          display: flex;
          flex-direction: column;
          padding: 12px 0;
        }
        .billing-item {
          display: flex;
          flex-direction: column;
          padding: 4px 20px;
        }
        .item-row {
          justify-content: space-between;
          display: flex;
          gap: 10px;
          color: var(--Black, #222);
          font-weight: 500;
        }
        .item-name {
          font: 15px Inter, sans-serif;
        }
        .item-price {
          text-align: right;
          letter-spacing: -0.32px;
          font: 16px/110% Inter, sans-serif;
        }
        .divider {
          border: 1px solid rgba(230, 230, 230, 1);
          background-color: #e6e6e6;
          margin-top: 9px;
          height: 1px;
        }
        .total-row {
          justify-content: space-between;
          display: flex;
          margin-top: 10px;
          gap: 10px;
          color: var(--Black, #222);
          white-space: nowrap;
        }
        .total-label-item {
          font: 500 15px Inter, sans-serif;
        }
        .total-amount-item {
          text-align: right;
          letter-spacing: -0.32px;
          font: 700 16px/110% Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .timestamp-section {
          border-top: 1px solid rgba(130, 130, 130, 0.15);
          border-bottom: 1px solid rgba(130, 130, 130, 0.15);
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: var(--Black, #222);
          white-space: nowrap;
          letter-spacing: -0.28px;
          line-height: 130%;
          justify-content: center;
          padding: 8px 20px;
        }
        .timestamp-details {
          display: flex;
          flex-direction: column;
        }
        .timestamp-label {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .timestamp-info {
          justify-content: center;
          display: flex;
          gap: 4px;
        }
        .timestamp-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .timestamp-text {
          text-overflow: ellipsis;
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .date-section {
          justify-content: center;
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          font-weight: 400;
          padding: 1px 0;
        }
        .date-info {
          justify-content: center;
          display: flex;
          gap: 4px;
        }
        .date-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .date-text {
          text-overflow: ellipsis;
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .print-action {
          align-items: end;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: var(--Primary, #0d3f20);
          font-weight: 500;
          white-space: nowrap;
          line-height: 140%;
          padding: 8px 12px 0;
        }
        .print-action-button {
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(13, 63, 32, 1);
          padding: 10px 16px;
        }
        .recent-bills {
          border-radius: 24px;
          border: 1px solid rgba(205, 234, 207, 1);
          display: flex;
          flex-direction: column;
          color: var(--Black, #222);
          font-weight: 500;
          justify-content: center;
          margin: 24px 0 482px;
          padding: 12px 0;
        }
        .bill-item {
          display: flex;
          margin-bottom: 16px;
          flex-direction: column;
          padding: 4px 20px;
        }
        .bill-row {
          justify-content: space-between;
          display: flex;
          gap: 10px;
        }
        .bill-name {
          font: 15px Inter, sans-serif;
        }
        .bill-price {
          text-align: right;
          letter-spacing: -0.32px;
          font: 16px/110% Inter, sans-serif;
        }
      `}</style>
      <section className="container">
        <header className="billing-header">
          <div className="billing-details">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac75f1ba2701230453b3f69fef931650b0528a0f0c83dccc92d66b030e2d67ca?apiKey=433434157f134a548d8a823886c69352&"
              className="icon"
              alt="billing icon"
            />
            <div className="billing-title">Billing for 123</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9fbdfdc290834047df5f26436640f186da11fcff3c4c24886950b4f761d4cac?apiKey=433434157f134a548d8a823886c69352&"
              className="icon"
              alt="settings icon"
            />
          </div>
        </header>
        <section className="content">
          <div className="total-section">
            <div className="total-label">Total outstanding</div>
            <div className="total-amount">₹2050</div>
          </div>
          <div className="print-container">
            <button className="print-button">Print all</button>
          </div>
          <section className="billing-info">
            <div className="billing-card">
              <div className="billing-item">
                <div className="item-row">
                  <div className="item-name">1 Pasta Aglio Olio</div>
                  <div className="item-price">₹120</div>
                </div>
                <div className="item-row">
                  <div className="item-name">1 Cheese Burger</div>
                  <div className="item-price">₹120</div>
                </div>
                <div className="item-row">
                  <div className="item-name">gst</div>
                  <div className="item-price">₹10</div>
                </div>
                <div className="divider"></div>
                <div className="total-row">
                  <div className="total-label-item">Total</div>
                  <div className="total-amount-item">₹250</div>
                </div>
              </div>
            </div>
            <section className="timestamp-section">
              <div className="timestamp-details">
                <div className="timestamp-label">
                  <div className="timestamp-info">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e50d217e86028559a6bcc230248822272476f29113bbcd7d5edcc35d51077a36?apiKey=433434157f134a548d8a823886c69352&"
                      className="timestamp-icon"
                      alt="time icon"
                    />
                    <div className="timestamp-text">
                      3:24 <span aria-hidden="true">p.m.</span>
                    </div>
                  </div>
                </div>
                <div className="date-section">
                  <div className="date-info">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9869fccb3c5fbec8821fe920c50a03fe37ea90d0ba1ff8908120c709f170f6?apiKey=433434157f134a548d8a823886c69352&"
                      className="date-icon"
                      alt="date icon"
                    />
                    <div className="date-text">7 June, 2024</div>
                  </div>
                </div>
              </div>
            </section>
            <div className="print-action">
              <button className="print-action-button">Print</button>
            </div>
            <div className="billing-card">
              <div className="billing-item">
                <div className="item-row">
                  <div className="item-name">1 Pasta Aglio Olio</div>
                  <div className="item-price">₹120</div>
                </div>
                <div className="item-row">
                  <div className="item-name">1 Cheese Burger</div>
                  <div className="item-price">₹120</div>
                </div>
                <div className="item-row">
                  <div className="item-name">gst</div>
                  <div className="item-price">₹10</div>
                </div>
                <div className="divider"></div>
                <div className="total-row">
                  <div className="total-label-item">Total</div>
                  <div className="total-amount-item">₹250</div>
                </div>
              </div>
            </div>
            <section className="timestamp-section">
              <div className="timestamp-details">
                <div className="timestamp-label">
                  <div className="timestamp-info">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e50d217e86028559a6bcc230248822272476f29113bbcd7d5edcc35d51077a36?apiKey=433434157f134a548d8a823886c69352&"
                      className="timestamp-icon"
                      alt="time icon"
                    />
                    <div className="timestamp-text">
                      3:24 <span aria-hidden="true">p.m.</span>
                    </div>
                  </div>
                </div>
                <div className="date-section">
                  <div className="date-info">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9869fccb3c5fbec8821fe920c50a03fe37ea90d0ba1ff8908120c709f170f6?apiKey=433434157f134a548d8a823886c69352&"
                      className="date-icon"
                      alt="date icon"
                    />
                    <div className="date-text">7 June, 2024</div>
                  </div>
                </div>
              </div>
            </section>
            <div className="print-action">
              <button className="print-action-button">Print</button>
            </div>
            <div className="recent-bills">
              <div className="bill-item">
                <div className="bill-row">
                  <div className="bill-name">1 Pasta Aglio Olio</div>
                  <div className="bill-price">₹120</div>
                </div>
                <div className="bill-row">
                  <div className="bill-name">1 Cheese Burger</div>
                  <div className="bill-price">₹120</div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Billing;