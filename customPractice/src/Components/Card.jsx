import { useState } from 'react'


const user ={
    name:"Harshil Mayani",
    imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
    imgSize:90
}

function MyApp2(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count+1)
    }

    return (
        <div>
            <h1>Counters that updates together</h1>
            <MyButton2 count={count} handleClick={handleClick} />
            <MyButton2 count={count} handleClick={handleClick} />
        </div>
    )
}

function MyButton2({count, handleClick}){
    return (
        <>
        <button onClick={handleClick}>
            Clicked {count} times
        </button> 
        
        </>
    )
}







function MyApp(){
    return (
        <div>
            <h1>Counters that updates separately</h1>
            <MyButton/>
            <MyButton/>
        </div>
    )
}

function MyButton(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count+1)
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button> 
    )
}

export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt = {"Photo of " +user.name}
                style={{
                    width: user.imgSize,
                    height:user.imgSize,
                    border:10,
                    radius:10
                }}></img>
            <MyApp/>
            <MyApp2/>
        </>
    )
}

// export { MyApp }