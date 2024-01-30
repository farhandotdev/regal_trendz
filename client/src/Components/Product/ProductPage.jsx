import { CCarousel, CImage, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Rating from "../Starrating/Rating";
import Quantity from "../Properties/Quantity";
import Threethings from "../Description/Threethings";
import "./product.css";
import { PartyModeTwoTone } from "@mui/icons-material";
import DisplayCard from "../Cards/DisplayCard";
import clothImage from "../../assets/t11.webp";
const ProductPage = () => {
  const relatedProducts = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
    { id: 4, title: "Product 4" },
    ,
    { id: 4, title: "Product 4" },
    ,
    { id: 4, title: "Product 4" },
    ,
    { id: 4, title: "Product 4" },
    // ,
    // { id: 4, title: "Product 4" },
    // ,
    // { id: 4, title: "Product 4" },
    // ,
    // { id: 4, title: "Product 4" },
    // ,
    // { id: 4, title: "Product 4" },
    // ,
    // { id: 4, title: "Product 4" },
  ];
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
            <div className="property-product">
              <ul className="list-property">
                <li className="list-items">
                  Adjustable drawstrings at the hood
                </li>
                <li>Welt pockets at waist</li>
              </ul>
            </div>
            <hr />

            <div className="product-cart-btns">
              <div className="product-cart-controller">
                <Quantity />
              </div>
              <div className="btns">
                <button className="btn-1">ADD TO CART</button>
              </div>
            </div>
            <hr />
            <div className="three-extra">
              <ul className="unordered-items">
                <li className="list-items  mb-15">
                  <strong>SKU :</strong>
                  <span className="span-part">8552635</span>
                </li>
                <li className="list-items   mb-15">
                  <strong>CATEGORY :</strong>
                  <span className="span-part">
                    <a href="#0">Clothes</a>
                  </span>
                </li>
                <li className="list-items">
                  <strong>TAG :</strong>
                  <span className="span-part">
                    <a href="#0">Men</a> , <a href="#0">Women</a> ,{" "}
                    <a href="#0">Jacket</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-reviews">
          <Threethings />
        </div>
      </div>
      <div className="related-products">
        <h1>Related Products</h1>

        <div className="cards">
          {relatedProducts.map((product) => (
            <DisplayCard key={product.id} productTitle={product.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
