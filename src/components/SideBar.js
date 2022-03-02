import React from 'react';
import one from './SideBar_svgs/one.svg'
import two from './SideBar_svgs/two.svg'
import three from './SideBar_svgs/three.svg'
import four from './SideBar_svgs/four.svg'
import five from './SideBar_svgs/five.svg'
import six from './SideBar_svgs/six.svg'


const SideBar = () => {

        const menu_array = [
                {name: 'menu1', pic: one}, 
                {name: 'menu2', pic: two},
                {name: 'menu3', pic: three}, 
                {name: 'menu4', pic: four}, 
                {name: 'menu5', pic: five}, 
                {name: 'menu6', pic: six}
        ];

        // const pic_array = [one, two, three, four, five, six];


        return (
                <div>
                        <div>
                                <img src='../../profile_pic.png' alt="profile pic" />
                                <h3>Prabhatsinh Rathod</h3>
                                <p>UI UX Designer</p>

                                <button>
                                        <img src="../../Become_a_pro.png" alt="button" />
                                        Become a Pro
                                </button>
                        </div>

                        <div>   
                                <ul>
                                        <li>
                                                <img src="../../menu_icon_1.png" alt="menu-cion" />
                                                <a href="#"> Dashboard</a>
                                        </li>

                                        {menu_array.map((each, key) => (
                                                <li>
                                                        <img src={each.pic} alt="button" />
                                                        {each.name}
                                                        {
                                                                key === 6 
                                                                &&
                                                                (
                                                                <div>
                                                                        the pic
                                                                </div>
                                                                )
                                                        }
                                                        {
                                                                key === 7
                                                                &&
                                                                (
                                                                <div>
                                                                       seven
                                                                </div>
                                                                )
                                                        }

                                                </li>
                                               
                                        ))}
                                </ul>

                                <div>
                                        <img />
                                        <h3>Buy More Storage</h3>
                                        <button>Buy Now</button>
                                </div>
                        
                        </div>

                        <div>
                                
                        </div>
                
                </div>
        )
}

export default SideBar;