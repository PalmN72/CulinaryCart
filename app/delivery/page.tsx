import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="delivery-container">
        <h3>terms of delivery</h3>

        <h2>1. Delivery Areas and Timeframes</h2>
        <p>
          We deliver to [Specify delivery areas] within [Specify delivery
          timeframes]. Standard delivery takes approximately [Specify number of
          business days]. Express delivery is available for faster shipping.
        </p>

        <h2>2. Delivery Charges</h2>
        <p>
          Delivery charges are calculated at checkout. Standard delivery costs
          [Specify standard delivery fee]. For express delivery, an additional
          fee of [Specify express delivery fee] applies.
        </p>

        <h2>3. Order Confirmation and Tracking</h2>
        <p>
          Upon completing your purchase, you'll receive an order confirmation
          via email. Once your order is dispatched, a shipping confirmation with
          a tracking number will be sent to track the delivery status.
        </p>
      </div>
    </>
  );
};

export default Delivery;
