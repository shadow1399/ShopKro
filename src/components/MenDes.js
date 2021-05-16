import React, { useState }from 'react'
import { items } from '../item'
import Navbar from './Navbar';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useParams } from 'react-router-dom';

function MenDes({ onAdd, cartItem }) {

    const [Desitems, setDesitems] = useState(items)
    // const [cartItems, setcartItems] = useState(cartItem)
    var var1;
    let {id}=useParams()
    // console.log({ id });
    for (var i = 0; i < Desitems.length; i++)
    {

        if (Desitems[i].id ==id) {
            var1 = Desitems[i];
            break;
        }
    
    }
    // console.log(var1);
    if (!var1)
    {
        return(<h1>Item Not Found</h1>)
        
    }

    return (
        <div>
            <Navbar />
            <div className="Product__Des">
            <h1>Best Site to Shop</h1>
            </div>
            <div className="Des__Main">
            <div className="Des__Image my-4">
                <img src ={var1.imageurl} ></img>
            </div>
            <div className="Des__Information">
                <h2>{var1.name}</h2>
                    <h2>Price {var1.price}</h2>
                    <div className="Des__extra">
                    100% Original Products<br/>
                    Free Delivery<br/>
                    Pay on delivery might be available<br/>
                    Easy 30 days returns and exchanges<br/>
                    Try & Buy might be available
                        
                        </div>
                        
                    <button onClick={()=>onAdd(var1)}className="Des__Add" ><span className="Des__icon"><LocalMallIcon /></span>Add to Cart</button>
                    
                    
                </div>
                </div>
        </div>
    )
}

export default MenDes
