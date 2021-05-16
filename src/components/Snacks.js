import React,{useState} from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { itemsnacks } from '../itemsnack';
import { Link } from 'react-router-dom';

function Snacks({ onWish, onUnwish,wishList }) {
    const [snackitem, setsnackitem] = useState(itemsnacks)
    // const [HandleClick, setHandleClick] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="Kid__Item">
            {snackitem.map(i => (
                <div className="Kid__Card ">
                   
                    <Cards imgurl={i.imageurl} />
                    <h4><Link to={`/Grocery/Snacks/${i.id}`}>{i.name}</Link></h4>
                    
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

export default Snacks
// h1>Snacks</h1>