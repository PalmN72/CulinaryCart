import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="delivery-container">
        <h3>terms of delivery</h3>

        <h2>1. Delivery Areas and Timeframes</h2>
        <p>
          We deliver to all areas within 2 weeks. Standard delivery takes
          approximately 3 - 5 days. Express delivery is available for faster
          shipping.
        </p>

        <h2>2. Delivery Charges</h2>
        <p>
          Delivery charges are calculated at checkout. Standard delivery costs
          nothing. For express delivery, an additional fee of 200 SEK applies.
        </p>

        <h2>3. Order Confirmation and Tracking</h2>
        <p>
          Upon completing your purchase, you will receive an order confirmation
          via email. Once your order is dispatched, a shipping confirmation with
          a tracking number will be sent to track the delivery status.
        </p>
      </div>
    </>
  );
};

export default Delivery;
