import RightCardContent from './RightCardContent'


function RightCard(props) {
    return (
        <div className="h-full shrink-0 overflow-hidden relative rounded-4xl w-80 bg-red-500">
            <img src={props.img} alt="image" className="h-full object-cover "/>
            <RightCardContent color={props.color}id={props.id} tag={props.tag}/>
        </div>
    )
}

export default RightCard
