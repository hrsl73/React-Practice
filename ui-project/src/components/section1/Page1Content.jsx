import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content() {
    return (
        <div className="h-[90vh] py-10 px-12 gap-10 flex items-center">
            <LeftContent/>
            <RightContent/>
        </div>
    )
}

export default Page1Content
