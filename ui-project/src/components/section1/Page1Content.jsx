import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content(props) {
    
    return (
        <div className="h-[90vh] pb-16 pt-6 px-12 gap-10 flex items-center">
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    )
}

export default Page1Content
