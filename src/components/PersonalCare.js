import React ,{useState} from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { itempersonal } from '../itempersonal';
import { Link } from 'react-router-dom';

function PersonalCare({ onWish, onUnwish,wishList }) {
    const [itemPersonal, setitemPersonal] = useState(itempersonal)
    // const [HandleClick, setHandleClick] = useState(false)
    return (
        
        <div>
            <Navbar />
            <div className="Personal__Item">
            {itemPersonal.map(i => (
                <div className="Personal__Card ">
                   
                    <Cards imgurl={i.imageurl} />
                    <h4><Link to={`/Grocery/PersonalCare/${i.id}`}>{i.name}</Link></h4>
                    
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

export default PersonalCare
