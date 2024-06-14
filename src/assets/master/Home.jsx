import * as React from 'react';
import "./Home.css"
import TopNavBar from '../Manager/TopNavBar';
function ServiceCard({ imageSrc, altText, label }) {
  return (
    <div className="service-card">
      <img src={imageSrc} alt={altText} className="service-image" loading="lazy" />
      <div className="service-label">{label}</div>
    </div>
  );
}

function Home() {
  const services = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4a906b116c644ceec7861ea190ca9b2cee3a00d1fa9081594ea9e0c1f3baeef?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', alt: 'Housekeeping image', label: 'Housekeeping' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d99241e3ff161f49bc0c8675be50eaa1713e4eab55038f3573db09599a0dd2c6?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', alt: 'In-room dining image', label: 'In-room dining' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97e0561145da669df72e90e984234d7b757c070d7b15ecb111ecfab309d867dd?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', alt: 'Billing image', label: 'Billing' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/391fb3920a2702e6684820a4fdb9a2f2968bde2450fd542f966ac72333cbdf6c?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', alt: 'Edit menu image', label: 'Edit menu' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c91882db3feabd6ca638d2bc9c741404d587a6daf6814ad0c7077ad14cd5f7f1?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', alt: 'Edit personnel image', label: 'Edit personelle' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51dda0694fc9f55c7d22ece46fb06622fe6d0d8d687381add66f02876c928c8e?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', alt: 'Stats image', label: 'Stats' },
  ];

  return (
    <>
    <TopNavBar name="Home"/>
      <section className="services-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            imageSrc={service.src} 
            altText={service.alt} 
            label={service.label} 
          />
        ))}
      </section>
      <style jsx>{`
        
      `}</style>
    </>
  );
}

export default Home;