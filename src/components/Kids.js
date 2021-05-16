import React ,{useState} from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import { itemk } from '../itemk'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

function Kids({ onWish, onUnwish,wishList }) {
    const [KidsItems, setKidsItems] = useState(itemk)
    // const [HandleClick, setHandleClick] = useState(false)

    return (
        <div>
            <Navbar />
            <div className="Kid__Item">
            {KidsItems.map(i => (
                <div className="Kid__Card ">
                   
                    <Cards imgurl={i.imageurl} />
                    <h4><Link to={`/Fashion/Kids/${i.id}`}>{i.name}</Link></h4>
                    
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

export default Kids
