import React,{useState} from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { itemw } from '../itemw'
import { Link } from 'react-router-dom';


function Women({ onWish, onUnwish,wishList }) {
    const [WomenItems, setWomenItems] = useState(itemw)
    // const [HandleClick, setHandleClick] = useState(false)
    return (
        
        <div>
            <Navbar/>
            <div className="Women__Item">
            {WomenItems.map(i => (
                <div className="Women__Card ">
                   
                    <Cards imgurl={i.imageurl} />
                    <h4><Link to={`/Fashion/Women/${i.id}`}>{i.name}</Link></h4>
                    
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

export default Women
