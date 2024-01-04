import React from 'react'
import "./AddToCard.css"
import img from "../../assets/t11.webp"
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Card2 = () => {
    return (
        <div>
            <div className="item">
                <div className="images">
                    <img src={img} id="img1" />
                </div>
                <div className='item-details'>
                <h2>Stylish T-shirt</h2>
                 <h3>Men Brown white  T-shirt For man   
                 </h3>
                 <h4> Price: ₹799  </h4>
                  <span className="add-rem">
                      <h5>Qty : 2</h5>
                     <AddIcon className='addicon' style={{fontSize:"16px"}} />
                     <RemoveIcon className='addicon' style={{fontSize:"16px"}}/>
                  </span>
                </div>
                <div className="removeicon">
                 <ClearIcon fontSize='small' />
                 
                </div>
            </div>
        </div>
    )
}

export default Card2
