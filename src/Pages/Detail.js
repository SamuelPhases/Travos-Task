import {useState} from 'react' 
import './Detail.css'
import {motion} from 'framer-motion'

import hero from '../images/hero.png'
import slideImg from '../images/slider.png'
import small from '../images/small.svg'
import large from '../images/large.svg'
import medium from '../images/medium.svg'

import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// import {useStateValue} from '../ContextBank/StateProvider'
import { useHistory}  from 'react-router-dom'



function Detail({id,title,image,price}) {

    const [showmore, setShowmore] = useState(false)

    const displayAll = (show) => {
        setShowmore(!show)
    }

    const [showsizeoverlay, setShowsizeoverlay] = useState(false)

    const sizeOverlay = (show) => {
        setShowsizeoverlay(!show)
    }

    let history=useHistory()
    // CART FUNCTIONALITY
    // const [state,dispatch]=useStateValue()
    const pickSize = () => {
        // dispatch({
        //     type: 'ADD_TO_CART',
        //     item: {
        //         id: id,
        //         title: title,
        //         image: image,
        //         price: price,
        //     }
        // })
        history.push('/cart')
        setShowsizeoverlay(false)
    }


    // CART FUNCTIONALITY
    const removeSizeOverlay = (e) => {
        if (e.target.classList.contains('show-sizeOverlayContainer')) {
            setShowsizeoverlay(false)
        }
    }

    const [showotherimg, setShowotherimg] = useState(false)

    const slideFunc = (show) => {
        setShowotherimg(!show)
     }

    return (
        <section className="detail">
            <header>
                <div className={`header-img ${showotherimg  &&  'showSecond'} `} onClick={()=>slideFunc(showotherimg)}>
                    <img src={slideImg} alt="hero"/>
                </div>
                <div className="slider-btns"
                onClick={()=>slideFunc(showotherimg)}
                >
                    {!showotherimg ? 
                    <div className="slide-btn">
                        <FiberManualRecordOutlinedIcon/>
                    </div>
                        : 
                    <div className="slide-btn">
                        <FiberManualRecordIcon/>
                    </div>
                      }
                    {showotherimg ? 
                    <div className="slide-btn">
                        <FiberManualRecordOutlinedIcon/>
                    </div>
                        : 
                    <div className="slide-btn">
                        <FiberManualRecordIcon/>
                    </div>
                      }
                </div>
                <div className="header-text">
                    <h2>HERO</h2>
                    <div className="header-info">
                        <div className="info-A">
                            <h4>N199</h4>
                            <p>Unisex pack of 2</p>
                        </div>
                        <div className="info-B">
                            <FavoriteRoundedIcon/>
                        </div>
                    </div>
                </div>
                <div className="header-footer">
                    <div className="sm-size">
                        <img src={small} alt="small"/>
                    </div>
                    <div className="medium-size">
                        <img src={medium} alt="medium"/>
                    </div>
                    <div className="large-size">
                        <img src={large} alt="large"/>
                    </div>
                </div>
            </header>
            <div className="product-abt">
                <h4>100% Original Products</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi recusandae magni nobis non in eligendi ipsum. Molestias neque saepe dignissimos dolor facilis impedit at.
                {showmore && 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis, laboriosam, sint provident architecto animi inventore reiciendis, iure consequatur rem iusto officia dolorum repudiandae nihil amet possimus voluptatum atque consequuntur tempora voluptate? Temporibus beatae minus officia sit, ipsa quaerat mollitia.</p>
                }
                <span onClick={() => displayAll(showmore)}>
                {showmore ? <span> Read less</span> : <span> Read more</span>   }
                </span></p>
            </div>
            <div className="spec">
                <h5 className="badge">spec</h5>
                <div className="spec-list">
                    <div className="spec-listPoint">
                        <InsertEmoticonIcon />
                        <p>Pleated at sides for extra comfort</p>
                    </div>
                    <div className="spec-listPoint">
                        <InsertEmoticonIcon />
                        <p>Pleated at sides for extra comfort</p>
                    </div>
                    <div className="spec-listPoint">
                        <InsertEmoticonIcon />
                        <p>Pleated at sides for extra comfort</p>
                    </div>
                    <div className="spec-listPoint">
                        <InsertEmoticonIcon />
                        <p>Pleated at sides for extra comfort</p>
                    </div>
                </div>
            </div>
            <button onClick={() => sizeOverlay(showsizeoverlay)} >add to cart</button>
            {showsizeoverlay && 
                <div className="show-sizeOverlayContainer" onClick={(e)=>removeSizeOverlay(e)}
                >
                    <div className="size-compOverlay">
                        <h3>Select Size</h3>
                        <div className="size-flex">
                        <div className="sm-size"
                        onClick={()=>pickSize()}
                        >
                                <img src={small} alt="small"/>
                            </div>
                        <div className="md-size"
                        onClick={()=>pickSize()}
                        >
                                <img src={medium} alt="medium"/>
                            </div>
                        <div className="lg-size"
                        onClick={()=>pickSize()}
                        >
                                <img src={large} alt="large"/>
                            </div>
                        </div>
                        <p>Size Chart</p>
                    </div>
                </div>
            }
        </section>
    )
}

export default Detail
