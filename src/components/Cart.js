import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Cart({cartItem,onAdd,onRemove}) {
    // const [cartItems, setcartItems] = useState(cartItem)
    // console.log(cartItems);
    // console.log(cartItems.length);
    const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
    const discnt = itemPrice * .20;
    const totalPrice = itemPrice - discnt;
    return (
        <div>
            <Navbar/>
            <div>
                {cartItem.length === 0 && <div className="cart__initial">
                <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h2>Cart</h2>
                </div>
                <div class="card-body cart">
                    <div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"/>
                        <h3><strong>Your Cart is Empty</strong></h3>
                        <div className="cart__h">Add something to make me happy :)</div><Link to="/" className="link">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>}
            </div>
            <div className="cart__maind">
                <div>
                    
            {
                
                cartItem.map((item) => (
                    <div key={item.id} >
                            <div className="cart__item">
                        <div className="cart__image my-4">
                            
                            <img src={item.imageurl}></img>
                            
                        </div>
                        
                        <div className="cart__name my-4">
                                    <h4>{item.name}</h4>
                                    <div className="cart__quantity my-4">
                            
                            <button className="plus__btn" onClick={() => onAdd(item)}>+</button>
                            <span>{item.qty}</span>
                            <button className="minus__btn" onClick={() => onRemove(item)}>-</button>
                                    </div>
                                    <div className="cart__price my-4">
                             Rs{item.price*item.qty}
                        </div>
                            </div>
                            
                        </div>
                        {/* <div className="Des__Main">
            <div className="Des__Image my-4">
                <img src ={item.imageurl} ></img>
            </div>
            <div className="Des__Information">
                <h2>{item.name}</h2>
                    <h2>Price {item.price * item.qty}</h2>
                    <button className="plus__btn" onClick={() => onAdd(item)}>+</button>
                            <span>{item.qty}</span>
                            <button className="minus__btn" onClick={() => onRemove(item)}>-</button>
                    
                </div>
                </div> */}
                        
                        </div>
                        
                       
                ))}
                    
                </div>
                {cartItem.length != 0 ?
                    <div className="cart__pricelist">
                        <h3>Price Details</h3>
                        <ul>
                            <li>Total Mrp = Rs: {itemPrice}</li>
                            <li>Discount = Rs: {discnt.toFixed(2)}</li>
                            <li>Delivery Charge = Rs: 0</li>
                            <li>Total Charge = Rs: {totalPrice.toFixed(2)}</li>
                        </ul>
                        <button className="Des__Addd" ><span className="Des__iconn"><ShoppingBasketIcon /></span>Place Order</button>
                    </div> :
                    <div className="cart__pricelist cart__done">
                        <h3>Price Details</h3>
                        <ul>
                            <li>Total Mrp = Rs: {itemPrice}</li>
                            <li>Discount = Rs: {discnt.toFixed(2)}</li>
                            <li>Delivery Charge = Rs: 0</li>
                            <li>Total Charge = Rs: {totalPrice.toFixed(2)}</li>
                        </ul>
                        <button className="Des__Addd" ><span className="Des__iconn"><ShoppingBasketIcon /></span>Place Order</button>
                    </div>
                }
                </div>
        </div>
    )
}

export default Cart
