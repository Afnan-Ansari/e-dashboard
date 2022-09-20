import React, { useEffect } from 'react';
import { Link, useNavigate ,NavLink } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
           <img className='logo' src='data:image/png;base64,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'alt='logo'/>
            {auth ? <ul className='nav-ul'>
                <li><NavLink to='/'>Products</NavLink></li>
                <li><NavLink to='/add'>Add Products</NavLink></li>
                <li><NavLink to='/update'>Update Products</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/signup' onClick={logout}>Logout ({JSON.parse(auth).name})</NavLink></li>

            </ul> :
                <ul className='nav-ul nav-right'> <li><NavLink to='signup'>SignUp</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li></ul>
            }
        </div>
    )
}
export default Nav;