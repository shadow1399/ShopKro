import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Cards from './Cards'
import Navbar from './Navbar'

function Home() {
    const [image, setimage] = useState(["https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/16/d987149f-bf5b-4c5e-b281-55027246cd491618567046324-Banner_1920x504--3-.jpg", "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/15/af11440b-eb3d-44ec-ba95-8ee1e6df72f51618507938764-glow-up-desktop-banner.jpg", "https://content.shop4reebok.com/static/hero/RBK_Outlet_1920x800_15th_Dec.jpg"])
    const [image2, setimage2] = useState(["https://www.bigbasket.com/media/uploads/banner_images/Green_BakeryStore_DT_4_1130x400_25thMar21.jpg","https://www.bigbasket.com/media/uploads/banner_images/Green_PetStore_DT_3_1130x400_25thMar21.jpg","https://www.bigbasket.com/media/uploads/banner_images/Green_2104408_beauty-bestsellers_400.jpg"])
    return (
        <div className="main_id">
      <Navbar />  
            <Banner imageurl={image} visible = "false" />
            <div className="home__cards my-4">
                <Link to="/Fashion/Men"><Cards imgurl="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg" /></Link>
                <Link to="/Fashion/Women"><Cards imgurl="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg" /></Link>
                <Link to="/Fashion/Women"><Cards imgurl="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg" /></Link>
                <Link to="/Fashion/Men"><Cards imgurl="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg" /></Link>
                <Link to="/Grocery/PersonalCare"><Cards imgurl = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg"/></Link>
            </div>
            <div className="home__cards2 my-4">
                <img src="https://content.shop4reebok.com/static/explore/MYT_960x480_27th_15th_April.jpg" />
                <img src="https://content.shop4reebok.com/static/explore/WALKING_960x480_27th_March.jpg" />

            </div>
            <div className="home__cards3 my-4">
                {/* <img src="https://content.shop4reebok.com/static/explore/MYT_960x480_27th_15th_April.jpg" /> */}
                <img src="https://rukminim1.flixcart.com/flap/844/240/image/af0c1955b35a2438.jpg?q=50" />

            </div>
            <Banner imageurl={image2} visible = "false"/>
    </div>
    )
}

export default Home
