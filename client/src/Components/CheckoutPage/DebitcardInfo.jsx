import React from 'react';

const DebitcardInfo = () => {
  return (
      <form action="#">
          <div className="form-row">
              <div className="input-data">
                  <input type="text" required />
                  <div className="underline" />
                  <label htmlFor>Enter Cardholder Name</label>
              </div>
          </div>
          <div className="form-row">
              <div className="input-data">
                  <input type="email" required />
                  <div className="underline" />
                  <label htmlFor>Email Address</label>
              </div>
          </div>
          <div className="form-row">
              <div className="input-data">
                  <input type="Number" required />
                  <div className="underline" />
                  <label htmlFor>Enter Card Number</label>
              </div>
          </div>
          <div className="form-row">
              <div className="input-data">
                  <input type="number" required />
                  <div className="underline" />
                  <label htmlFor>Expire Date</label>
              </div>
              <div className="input-data">
                  <input type="number" required />
                  <div className="underline" />
                  <label htmlFor>CVV</label>
              </div>

          </div>
      </form>
  );
}

export default DebitcardInfo;
