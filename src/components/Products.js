import {useState}  from 'react'

import Product from './Product'
import './Products.css'

import uneo from '../images/uneo.png'
import usPolo from '../images/usPolo.png'
import hero from '../images/hero.png'
import uneoVibes from '../images/uneoVibes.png'
import wildCraft from '../images/wildCraft.png'

// colorPalette = [#c3e5e4,#e6e6e6,#d1d4d8,#f7f0e4,#fceaf2]
function Products() {
    const [liked, setLiked] = useState(false)
    const [colors,setColors]=useState()

    return (
        <section className="products">
            <Product id={1} imageUrl={uneo} name='UNEO' price={199} size='Unisex Pack Of 2' />
            <Product id={2} imageUrl={usPolo} name='US Polo' price={299} size='Unisex Pack Of 3' liked />
            <Product id={3} imageUrl={hero} name='Hero' price={199} size='Unisex Pack Of 2' liked />
            <Product id={4} imageUrl={uneoVibes} name='UNEO' price={199} size='Unisex Pack Of 2' liked />
            <Product id={5} imageUrl={wildCraft} name='Wild Craft' price={150} size='Unisex Pack Of 3' liked />
            {/* <Product  imageUrl={uneo} name='UNEO' price={199} size='Unisex Pack Of 2' liked />
            <Product  imageUrl={usPolo} name='US Polo' price={299} size='Unisex Pack Of 3' />
            <Product  imageUrl={hero} name='Hero' price={199} size='Unisex Pack Of 2' liked />
            <Product  imageUrl={uneoVibes} name='UNEO' price={199} size='Unisex Pack Of 2' liked /> */}
        </section>
    )
}

export default Products
