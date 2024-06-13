import * as React from "react";
import RHeader1 from "./R1header";
import OrderSection from "./OrderSection";
import "./css/OrderConfirmation.css"
function ConfirmationMessage() { 
    return ( 
      <> 
        <section className="confirmation-message">Your order has been placed!</section> 
      
      </> 
    ); 
  } 
const LineItem = ({ label, value }) => (
    <div className="line-item">
      <span className="line-item-label">{label}</span>
      <span className="line-item-value">{value}</span>
    </div>
  );
  
  function Subbill() {
    const items = [
      { label: "Subtotal", value: "₹240" },
      { label: "GST", value: "₹10" },
      { label: "Total", value: "₹250" },
    ];
  
    return (
      <>
        <section className="summary">
          {items.map((item, index) => (
            <LineItem key={index} label={item.label} value={item.value} />
          ))}
        </section>
        
        <style jsx>{`
          
        `}</style>
      </>
    );
  }
  

function ProductItem({ imageSrc, altText, title, quantity, price }) {
  return (
    <>
      <article className="product-card">
        <img loading="lazy" src={imageSrc} alt={altText} className="product-image" />
        <section className="product-info">
          <header className="product-details">
            <h2 className="product-title">{title}</h2>
            <p className="product-quantity">Quantity: {quantity}</p>
          </header>
          <p className="product-price">₹{price}</p>
        </section>
      </article>
      <style jsx>{`
        
      `}</style>
    </>
  );
}

function OrderConfirmation() {
const[confirm,setConfirm]=React.useState(false);

const rendered = confirm ? <a href="/confirmation"><div className="x"><OrderSection className="x" message="Done"/></div></a>: <OrderSection message="Confirm"/>;
function confirmed()
{
    setConfirm(true);
    
    
}
  const products = [
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ae56994a63b39ec5f4cb51053f1c3d120783fccfcb9a0c7eeda45ecb567f181?apiKey=e0ca87f5e1974e589ad51a28eed298e2&',
      altText: 'Image of Cheese Burger',
      title: 'Cheese Burger',
      quantity: 1,
      price: 120,
    },
    {
        imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ae56994a63b39ec5f4cb51053f1c3d120783fccfcb9a0c7eeda45ecb567f181?apiKey=e0ca87f5e1974e589ad51a28eed298e2&',
        altText: 'Image of Cheese Burger',
        title: 'Cheese Burger',
        quantity: 1,
        price: 120,
      }
  ];

  return (
    <>
    {/*the linking here is not correct- need to link to previous restaurant name*/}
    {confirm?<ConfirmationMessage/>:null}
    <a href="/in-room-dining"><RHeader1 message="Order confirmation"/></a>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          imageSrc={product.imageSrc}
          altText={product.altText}
          title={product.title}
          quantity={product.quantity}
          price={product.price}
        />
      ))}
      <Subbill/>
      <div className="space">
      
      <button className="b-style" onClick={confirmed}> {rendered}</button>
    
      </div>
      
      <style jsx>{`
        .space{
            margin-top:305.63px;
            margin-right:30px;
        }
        .x{
            position:absolute;
            
            top: 0;
   left: 0;
   width:240px;
        }
       
      `}</style>
    </>
  );
}

export default OrderConfirmation;