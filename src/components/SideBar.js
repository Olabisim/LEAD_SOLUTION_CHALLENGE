import React from 'react';
import one from './SideBar_svgs/one.svg'
import two from './SideBar_svgs/two.svg'
import three from './SideBar_svgs/three.svg'
import four from './SideBar_svgs/four.svg'
import five from './SideBar_svgs/five.svg'
import six from './SideBar_svgs/six.svg'
import './styles/sideBar.css'



const SideBar = () => {

        const menu_array = [
                {name: 'menu1', pic: one}, 
                {name: 'menu2', pic: two},
                {name: 'menu3', pic: three}, 
                {name: 'menu4', pic: four}, 
                {name: 'menu5', pic: five}, 
                {name: 'menu6', pic: six},
                {name: '', button: '', image: ""}, 
                {name: 'menu7', pic: three}, 
        ];

        // const pic_array = [one, two, three, four, five, six];


        return (
                <div className='root'>
                        <div className='inner_root1'>
                                <img src='../../profile_pic.png' alt="profile pic" />
                                <h3>Prabhatsinh Rathod</h3>
                                <span>UI UX Designer</span>

                                <button>
                                        <img src="../../Become_a_pro.png" alt="button" />
                                        Become a Pro
                                </button>
                        </div>
                        <br />
                        <div className='inner_root2'>   
                                <ul>
                                        <li>
                                                <img src="../../menu_icon_1.png" alt="menu-cion" />
                                                <a href="#">Dashboard</a>
                                        </li>

                                        {menu_array.map((each, key) => (
                                                <li>
                                                        {key !== 6 && <img src={each.pic} alt="button" />}
                                                        <a href="#">
                                                                {each.name}
                                                        </a>
                                                        {
                                                                key === 6 
                                                                &&
                                                                (
                                                                <div className='different_6'>
                                                                        <img src="../../storage.png" alt="" />

                                                                        <h3>Buy More Storage</h3>
                                                                        <button>Buy Now</button>
                                                                </div>
                                                                )
                                                        }

                                                </li>
                                               
                                        ))}
                                </ul>

                        
                        </div>

                        <div>
                                
                        </div>
                
                </div>
        )
}

export default SideBar;



// <div>
// <img src="../../storage.png" alt="" />

// <h3>Buy More Storage</h3>
// <button>Buy Now</button>
// </div>