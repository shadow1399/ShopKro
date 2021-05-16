import React,{useState} from 'react'
import { items } from '../item'
import Cards from './Cards'
import Navbar from './Navbar'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { itemmobiles } from '../itemmobile';
function Mobiles({ onWish, onUnwish,wishList }) {
    const [MobileItems, setMenItems] = useState(itemmobiles)
    // const [HandleClick, setHandleClick] = useState(false)
    return (
        <div >
            <Navbar />
            <div className="Men__Item">
            {MobileItems.map(i => (
                <div className="Men__Card ">
                   
                    <Cards imgurl={i.imageurl} />
                    <h4><Link to={`/Electronics/Mobiles/${i.id}`}>{i.name}</Link></h4>
                    
                    <div className="navbar__iconss">
                    <p>Rs.{i.price}</p>
                        {
                            wishList.find(x => x.id === i.id) ?
                                <FavoriteIcon onClick={ ()=> onUnwish(i)}/>
                                :<FavoriteBorderOutlinedIcon onClick={() => onWish(i)} />
           }
            
          </div>
                        
                    
                 
                </div>))}
            </div>
            
        </div>
    )
}

export default Mobiles
