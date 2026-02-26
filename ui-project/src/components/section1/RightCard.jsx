import React from 'react'
import RightCardContent from './RightCardContent'


function RightCard() {
    return (
        <div className="h-full shrink-0 overflow-hidden relative rounded-4xl w-80 bg-red-500">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="h-full object-cover "/>
            <RightCardContent/>
        </div>
    )
}

export default RightCard
