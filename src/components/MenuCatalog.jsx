import React, {useState} from 'react';
import {Link} from "react-router-dom";

const MenuCatalog = ({list, title, show,}) => {
    const [active, setActive] = useState(false)



    return (
        <div className={`show ${show &&'show__active'}`}>
            <div className="menu">
                <div className='menu__block'>
                    <li onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)}
                        className='menu__item'>
                        <Link className='menu__link' to='#'>

                            <p className='menu__title'>{title}</p>
                        </Link>
                        <div className="container">
                        {
                            active && <ul className='menu__activeList'>
                                {
                                    list.map(el => (
                                        <li className='menu__activeItem'>{el}</li>
                                    ))
                                }

                            </ul>
                        }
                            </div>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default MenuCatalog;