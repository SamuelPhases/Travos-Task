import './Product.css'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import {Link}  from 'react-router-dom'


function Product({id,imageUrl,name,price,size,liked}) {
    return (
        <Link to='/detail/:id' className={`product ${name == 'UNEO' && 'uneo-bg' } ${name == 'US Polo' && 'usPolo-bg'}  ${name=='HERO' &&'h-bg'} ${name=='Wild Craft' && 'w-bg'}  `}>
            <div className="product-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="content">
                <h2>{name}</h2>
                <div className="price-fav">
                    <div className="price">
                        <h4>N{price}</h4>
                        <p>{ size }</p>
                    </div>
                    <div className="fav">
                        {!liked ?  <FavoriteBorderRoundedIcon/>  :  <FavoriteRoundedIcon/> }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product
