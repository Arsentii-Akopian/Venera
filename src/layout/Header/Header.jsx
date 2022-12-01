import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import {CiSearch} from "react-icons/ci"
import MenuCatalog from "../../components/MenuCatalog";
import {IoMenu} from "react-icons/io5"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"


const Header = ({user, setUser,}) => {
    const [show, setShow] = useState(false)


    const [popup, setPopup] = useState(false)
    const logOutUser = () => {
        localStorage.removeItem('user')
        setUser({})
    }

    const arrItem = [


        {
            id: 2,
            title: 'Golova',
            list: [{name:'Šampony',path:'shampoo'},
                'Oplachovač na vlasy',
                'Balzám na vlasy',
                'Kondicionér',
                'Vlasové masky',
                'Peeling pro pokožku hlavy',
                'Scrub pro pokožku hlavy',
                'Lotiony na vlasy',
                'Olej na vlasy',
                'Séra, fluidy na vlasy',
                'Krém na vlasy',
                'Vlasové spreje',
                'Keratin na vlasy',
                'Ampule na vlasy',
                'Barvení',
                'Styling',
                'Světlé vlasy',
                'Příslušenství na vlasy',
                'Pro děti']
        },
        {
            id: 3,
            title: 'Obličej',
            list: ['Pleťové krémy',
                'Masky na obličej',
                'Balzámy na obličej',
                'Fluidy na obličej',
                'Séra, elixíry',
                'Oleje na obličej',
                'Čisticí',
                'Anti-aging',
                'Tonizující',
                'Výživující',
                'Hydratační',
                'Ochrana pred sluncem',
                'Péče o oči',
                'Péče o rty',
                'Kartáče na obličej',
                'Speciální přípravky',
                'Výrobky na holení',
                'Hydrofilní oleje']
        },
        {
            id: 4,
            title: 'bashka',
            list: ['Pro koupel a sprchu',
                'Péče o ústní dutinu',
                'Depilace',
                'Deodoranty, antiperspiranty',
                'Pro tělo',
                'Péče o ruce',
                'Péče o nohy',
                'Hygiena a ochrana',
                'Anticelulitida',
                'Ochrana před sluncem',
                'Oleje']
        }, {
            id: 5,
            title: 'Holova',
            list: ['Pro koupel a sprchu',
                'Péče o ústní dutinu',
                'Depilace',
                'Deodoranty, antiperspiranty',
                'Pro tělo',
                'Péče o ruce',
                'Péče o nohy',
                'Hygiena a ochrana',
                'Anticelulitida',
                'Ochrana před sluncem',
                'Oleje']
        }

    ]


    return (

        <div className="container">
            <header className='header'>

                <nav className='header__nav'>

                    <div onClick={()=> setShow(true)} className='header__catalog' ><IoMenu/></div>
                    <div className='header__left'>
                        <h1><Link className='header__logo-link' to='/'>VENERA</Link></h1>
                        <p className='header__p'>Korean Cosmetic</p>
                    </div>
                    <div className="container">

                        <div className='header__menu'>

                            <ul className='header__list'>

                                {
                                    arrItem.map( item  => (
                                       <MenuCatalog show={show} setShow={setShow} {...item} />
                                           ) )

                                }

                            </ul>

                        </div>
                    </div>



                    <div className='header__right'>


                        <div className='header__right-search'>

                            <input placeholder='search' className='header__right-input' type="search"
                            />
                            <button className='header__right-icon'><CiSearch/></button>

                        </div>
                        <div className="header__favorite">< AiOutlineHeart /><span  className='header__favorite-fill '><AiFillHeart/></span></div>


                        <div>

                        </div>
                        {
                            user.email ?

                                <div className='header__user'>
                                    <p className='header__user-name'>{user.name}</p>
                                    <button className='header__user-btn' onClick={logOutUser} type={'button'}>
                                        Odhlásit
                                    </button>
                                </div>
                                :
                                <p onClick={() => {
                                    setPopup(true)
                                }} className='header__login'>Přihlásit - Registrace</p>
                        }
                    </div>
                </nav>

                {
                    popup && <Popup user={user} setUser={setUser}
                                    setPopup={setPopup} popup={popup}/>
                }

              <div className="header__container-logo"> <Link className='logo' to='/'>VENERA</Link></div>
            </header>

        </div>

    );
};

export default Header;