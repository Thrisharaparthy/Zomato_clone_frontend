import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTag, faPercent } from '@fortawesome/free-solid-svg-icons';
import '../styles/SpecialOffers.css';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Weekend Special",
      discount: "20% OFF",
      description: "Get 20% off on all orders above $30",
      validUntil: "Sunday",
      code: "WEEKEND20"
    },
    {
      id: 2,
      title: "Family Pack",
      discount: "Free Dessert",
      description: "Free dessert with family size orders",
      validUntil: "Everyday",
      code: "FAMILY"
    },
    {
      id: 3,
      title: "Happy Hours",
      discount: "15% OFF",
      description: "Special discount between 2 PM - 5 PM",
      validUntil: "Weekdays",
      code: "HAPPY15"
    }
  ];

  return (
    <section className="special-offers">
      <h2>Special Offers</h2>
      <div className="offers-container">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <div className="offer-header">
              <h3>{offer.title}</h3>
              <span className="discount">
                <FontAwesomeIcon icon={faPercent} /> {offer.discount}
              </span>
            </div>
            <p className="offer-description">{offer.description}</p>
            <div className="offer-details">
              <span>
                <FontAwesomeIcon icon={faClock} /> Valid: {offer.validUntil}
              </span>
              <div className="offer-code">
                <FontAwesomeIcon icon={faTag} />
                <span>{offer.code}</span>
              </div>
            </div>
            <button className="claim-btn">Claim Offer</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;