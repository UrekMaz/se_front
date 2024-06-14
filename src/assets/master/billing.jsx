import * as React from "react";
import "./billing.css";
import TopNavBar from "../Components/TopNavBar";
function Billing() {
  return (
    <>
      <style jsx>{`
        
      `}</style>
      <section className="container">
        <TopNavBar name="Billing for 123" hamburger='master'/>
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