import { CCarousel, CImage, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Rating from "../Starrating/Rating";
import Quantity from "../Properties/Quantity";
import Threethings from "../Description/Threethings";
import "./product.css";
import clothImage from "../../assets/t11.webp";


const ProductPage = () => {


  return (
    <>
      <div className="container-parent">
        <div className="Product-parent">
          <div className="product-child-1">
            <CCarousel controls transition="crossfade">
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src={clothImage}
                  alt="slide 1"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src={clothImage}
                  alt="slide 2"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src={clothImage}
                  alt="slide 3"
                />
              </CCarouselItem>
            </CCarousel>
          </div>
          <div className="product-child-2">
            <div className="heading-price-product">
              <h5>$130.00</h5>
            </div>
            <div className="heading-name-rating-star">
              <h3>Men Hooded</h3>
              <div className="rating-star">
                <Rating rating={2.5} numReviews={10} />
              </div>
            </div>
            <div className="product-details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut pellentesque ante. Quisque at viver neque. Duis
                consectetur nisl at vehicular.
              </p>
            </div>
            <hr />
            <div className="product-cart-btns">
              <div className="product-cart-controller">
                <Quantity backGround="#2c4152" />
              </div>
              <div className="btns">
                <button className="btn-1">ADD TO CART</button>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="product-reviews">
          <Threethings />
        </div>
      </div>
      <div className="related-products">
        <h1>Related Products</h1>

        {/* <div className="cards">
          <DisplayCard />
        </div> */}
      </div>
    </>
  );
};

export default ProductPage;
