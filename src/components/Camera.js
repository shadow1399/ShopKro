import React,{useState} from 'react'
import { items } from '../item'
import Cards from './Cards'
import Navbar from './Navbar'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { itemcamera } from '../itemcamera';
function Camera({ onWish, onUnwish,wishList }) {
    const [CameraItems, setMenItems] = useState(itemcamera)
    // const [HandleClick, setHandleClick] = useState(false)
    return (
        <div >
            <Navbar />
            <div className="Men__Item">
            {CameraItems.map(i => (
                <div className="Men__Card ">
                   
                    <Cards imgurl={i.imageurl} />
                    <h4><Link to={`/Electronics/Cameras/${i.id}`}>{i.name}</Link></h4>
                    
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

export default Camera
