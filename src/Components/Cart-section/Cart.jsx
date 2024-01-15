import React from "react";
import "./cart.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <div className="cart-main-parent">
      <div className="cart-child">
        <div className="cart-product-number">
          <h6>Your cart(6)</h6>
        </div>
        <div className="cart-child-product-lists">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="cart-content-name">
            <div className="content-name-product">
              <h4>Marigold Trouser Lon</h4>
              <h5>$78.00</h5>
            </div>
            <div className="color-size-property">
              <plaintext>Color:Stripe</plaintext>
              <plaintext>Size: Medium Qty: 1</plaintext>
            </div>
            <div className="add-delete-button">
              <div className="two-add-mui-icons">
                <button className="icon-btn">
                  <RemoveIcon className="addicon" />
                </button>
                <button className="icon-btn">
                  <AddIcon className="addicon" />
                </button>
              </div>
              <div className="delete-icon">
                <DeleteIcon />
              </div>
            </div>
          </div>
        </div>
        <hr  className="hr-tag-cart"/>
        <div className="cart-child-product-lists">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="cart-content-name">
            <div className="content-name-product">
              <h4>Marigold Trouser Lon</h4>
              <h5>$78.00</h5>
            </div>
            <div className="color-size-property">
              <plaintext>Color:Stripe</plaintext>
              <plaintext>Size: Medium Qty: 1</plaintext>
            </div>
            <div className="add-delete-button">
              <div className="two-add-mui-icons">
                <button className="icon-btn">
                  <RemoveIcon className="addicon" />
                </button>
                <button className="icon-btn">
                  <AddIcon className="addicon" />
                </button>
              </div>
              <div className="delete-icon">
                <DeleteIcon />
              </div>
            </div>
          </div>
        </div>
        
        <hr className="hr-tag-cart"/>

        <div className="cart-child-product-lists">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="cart-content-name">
            <div className="content-name-product">
              <h4>Marigold Trouser Lon</h4>
              <h5>$78.00</h5>
            </div>
            <div className="color-size-property">
              <plaintext>Color:Stripe</plaintext>
              <plaintext>Size: Medium Qty: 1</plaintext>
            </div>
            <div className="add-delete-button">
              <div className="two-add-mui-icons">
                <button className="icon-btn">
                  <RemoveIcon className="addicon" />
                </button>
                <button className="icon-btn">
                  <AddIcon className="addicon" />
                </button>
              </div>
              <div className="delete-icon">
                <DeleteIcon />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-tag-cart" />

        <div className="cart-child-product-lists">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="cart-content-name">
            <div className="content-name-product">
              <h4>Marigold Trouser Lon</h4>
              <h5>$78.00</h5>
            </div>
            <div className="color-size-property">
              <plaintext>Color:Stripe</plaintext>
              <plaintext>Size: Medium Qty: 1</plaintext>
            </div>
            <div className="add-delete-button">
              <div className="two-add-mui-icons">
                <button className="icon-btn">
                  <RemoveIcon className="addicon" />
                </button>
                <button className="icon-btn">
                  <AddIcon className="addicon" />
                </button>
              </div>
              <div className="delete-icon">
                <DeleteIcon />
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="shipping-check-out-list">
        <div className="total-out-list">
          <h6 className="total-tag-cart">
              Total
          </h6>
          <h6 className="total-tag-cart" >
            $466.00

          </h6>

        </div>
        <div className="total-out-list   light-color-material">
          <h6>
            Shipping
          </h6>
          <h6>
            Free
          </h6>


        </div>
        <div className="checkout-button">
          <button>
            Go to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;
