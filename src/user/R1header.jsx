export default function RHeader1({message}) {
    return (
      <>
        <article className="restaurant-card1">
          <section className="restaurant-info1">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcd56886dd769c56072cf3f877c0ce8187512c1d18b898b51d874ff76ebbd026?apiKey=e0ca87f5e1974e589ad51a28eed298e2&" 
              alt="Exterior view of Restaurant 1" 
              className="restaurant-image1" 
            />
            <h2 className="restaurant-title1">{message}</h2>
          </section>
        </article>
  
        <style jsx>{`
          .restaurant-card1 {
            border: 1px solid rgba(229, 229, 229, 1);
            background-color: #fff;
            display: flex;
            
            height: 55.76px;
            flex-direction: column;
            font-size: 19px;
            color: var(--Black, #222);
            font-weight: 500;
            letter-spacing: -0.19px;
            line-height: 130%;
            justify-content: center;
            padding: 0 19px; /* Removed vertical padding to fit the specified height */
            width:360px;
          }
  
          .restaurant-info1 {
            display: flex;
            align-items: center;
            gap: 6px;
          }
  
          .restaurant-image1 {
            aspect-ratio: 1;
            object-fit: cover;
            object-position: center;
            width: 24px;
            height: 24px; /* Ensure the image is square */
          }
  
          .restaurant-title1 {
            font-family: "Inter", sans-serif;
            font-size: 16px;
            margin-left: 100px; /* Remove default margin */
          }
          button
          {
            width:350px
          }
        `}</style>
      </>
    );
  }



  