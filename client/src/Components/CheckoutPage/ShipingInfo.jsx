import React from 'react';
import "./Checkout.css"
const ShipingInfo = () => {
  return (
      <div className="shiping-container">
          <h3>Shipping Information</h3>
          <form action="#">
              <div className="form-row">
                  <div className="input-data">
                      <input type="text" required />
                      <div className="underline" />
                      <label htmlFor>Enter Name</label>
                  </div>

              </div>
              <div className="form-row">
                  <div className="input-data">
                      <input type="email" required />
                      <div className="underline" />
                      <label htmlFor>Email Address</label>
                  </div>
                  <div className="input-data">
                      <input type="number" required />
                      <div className="underline" />
                      <label htmlFor>Contact Number</label>
                  </div>
              </div>
              <div className="form-row">
                  <div className="input-data">
                      <input type="text" required />
                      <div className="underline" />
                      <label htmlFor>Enter Current Address</label>
                  </div>
              </div>
              <div className="form-row">
                  <div className="input-data">
                      <input type="email" required />
                      <div className="underline" />
                      <label htmlFor>City</label>
                  </div>
                
                  <div className="input-data">
                      <input type="text" required />
                      <div className="underline" />
                      <label htmlFor>State</label>
                  </div>

              </div>
              <div className="form-row">
                  <div className="input-data">
                      <input type="email" required />
                      <div className="underline" />
                      <label htmlFor>Country</label>
                  </div>
                  <div className="input-data">
                      <input type="number" required />
                      <div className="underline" />
                      <label htmlFor>PinCode</label>
                  </div>
              </div>
              <div className="form-row">
                  <div className="input-data textarea">
                      <div className="form-row submit-btn">
                          <div className="input-data">
                              <div className="inner" />
                              <input type="submit" defaultValue="submit" />
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  );
}

export default ShipingInfo;
