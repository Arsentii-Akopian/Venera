import React, {useState} from 'react';
import {GrFormClose} from'react-icons/gr'
import axios from "../../axios"


const Popup = ({popup,setPopup,user,setUser}) => {
    const [status,setStatus]= useState('signIn')
    const popupCloseFunc = (e) => {
        if (e.target.classList.contains("overlay")) {
            setPopup(false);
        }
    };
    const closeBtn = (e)=>{
        if(e.target.classList.contains("popup__close-btn")){
            setPopup(false)
        }
    }
    const signInHandler = (e) =>{
    axios.post('/login', {
        email: e.target[0].value,
        password: e.target[1].value,
        }).then( ({data})=>{
        e.target[0].value=''
        e.target[1].value=''
        setPopup(false)
        setUser(data.user)
        localStorage.setItem('user',JSON.stringify(data.user))

    })
    }
    const signUpHandler = (e) =>{
        axios.post('/signup',{
            email: e.target[0].value,
            name: e.target[1].value,
            password: e.target[2].value,
            avatar: '',

        }).then((res)=>    {
            setUser(res.data.user)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            setPopup(false)
            e.target[0].value=''
            e.target[1].value=''
            e.target[2].value=''
        }).catch(err => alert(err))
    }
    return (
        <div onClick={(e)=> popupCloseFunc(e)}
             className={`overlay ${popup &&'overlay__active' }`}>

         <div className="popup">
       <div  className='popup__close'>
           <div onClick={(e)=>closeBtn(e)}
                className='popup__close-btn'><GrFormClose /></div>
       </div>
             <form onSubmit={ (e) => {
                 e.preventDefault()
                 if(status=== 'signIn'){
                     signInHandler(e)
                 }else{
                     signUpHandler(e)
                 }
             }} className='popup__form'>
                 <div className='popup__form-top'>
                     <h2 onClick={()=> setStatus('signIn')} className={`popup__title  ${status === 'signIn' &&  'popup__title_active'}`}>Přihlášení</h2>
                     <h2 onClick={()=> setStatus('signUp')} className={`popup__title  ${status === 'signUp' &&  'popup__title_active'}`}>Registrace</h2>
                 </div>
                 <input placeholder='Zadejte email' className='popup__input' type="email"/>
                 {
                     status === 'signUp' && <input placeholder='Zadejte své jméno' className='popup__input' type="text"/>
                 }
                 <input placeholder='Zadejte heslo' className='popup__input' type="password"/>
                 <button className='popup__btn' type='submit'>{status === 'signIn' ? 'SignIn' : 'Registration'}</button>
             </form>
         </div>
        </div>
    );
};

export default Popup;