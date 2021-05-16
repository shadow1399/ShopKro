import { Link } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'

function WishList({ onUnwish, wishList }) {
    // const [wishList, setwishList] = useState([])
    return (
        <div>
            <Navbar />
            <div>
                {wishList.length === 0 && <div className="cart__initial">
                <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>WishList</h5>
                </div>
                <div class="card-body cart">
                    <div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"/>
                        <h3><strong>Your WishList is Empty</strong></h3>
                        <div className="cart__h">Add something to make me happy :)</div><Link to="/" className="link">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>}
            </div>
            <div className="Men__Item Wishlist__pad">
                
                    
            {
                
                wishList.map((item) => (
                    <div key={item.id} className="Wish__list" >
                            <div className="cart__item">
                        <div className="cart__image my-4 ">
                            
                            <img src={item.imageurl} className="Wish__Img"></img>
                            
                        </div>
                        
                        <div className="cart__name my-4">
                                <h4>{item.name}</h4>
                                <div className="cart__price my-4">
                                    Rs :{item.price}
                                   
                        </div>
                                    <div className="cart__quantity my-4">
                            <button className="Remove__btn" onClick={() => onUnwish(item)}>Remove</button>
                                    </div>
                                
                            </div>
                            
                        </div>
                        
                        </div>
                        
                       
                ))}
                    
                </div>
                
        </div>
    )
}

export default WishList
