import { MoveRight } from 'lucide-react';

function RightCardContent(props) {
    

    return (
        <div>
            <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
                <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">{props.id+1}</h2>
                <div>
                    <p className="text-xl leading-relaxed text-shadow-2xs text-white mb-14">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officiis reprehenderit pariatur voluptas minus quisquam.
                    </p>
                    <div className="flex item-center justify-between gap-1">
                        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full text-md text-gray-600'>{props.tag}</button>
                        <button style={{backgroundColor:props.color}} className='text-white font-medium px-4 py-2 rounded-full text-md flex items-center justify-center'><MoveRight/></button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default RightCardContent
