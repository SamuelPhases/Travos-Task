import './CartItem.css'

import AddRoundedIcon from '@material-ui/icons/AddRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'


import cartItemPic from '../images/uneo.png'



function CartItem() {
    return (
        <div className="cartItem">
            <div className="prodImg">
                <img src={cartItemPic} alt=""/>
            </div>
            <div className="prodDet">
                <h4>UNEO</h4>
                <h5>Rs 199 <span>Unisex Pack Of 2</span></h5>
                <h6>Size: <span>m</span> </h6>
                <p>remove</p>
            </div>
            <div className="prodQty">
                <div className="add">
                    <AddRoundedIcon/>
                </div>
                <div>
                    <p>1</p>
                </div>
                <div className="sub">
                    <RemoveRoundedIcon/>
                </div>
            </div>
        </div> 
    )
}

export default CartItem
