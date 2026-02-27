import RightCard from './RightCard'


function RightContent(props) {
    return (
        <div id='right' className="h-full rounded-4xl shrink-0 overflow-x-auto w-2/3 p-6 flex flex-nowrap gap-10">

            {props.users.map((data,idx)=>{
                    return <RightCard key={idx} color={data.color} id={idx} img={data.img} tag={data.tag}/>
            })}

        </div>
    )
}

export default RightContent
