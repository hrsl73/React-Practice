import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

function Button() {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        setTheme(prevTheme =>
            prevTheme === 'dark' ? 'light' : 'dark'
        )
    }

    return (
        <div>
            <button 
            className='border-3 rounded p-2 m-3 bg-blue-400 active:scale-95 active:bg-blue-600'
            onClick={changeTheme}>
                Change Theme ({theme})
            </button>
        </div>
    )
}

export default Button