import { useParams } from 'react-router-dom'

function Details() {

    

    const params = useParams()

    return (
        <div className='flex justify-center items-center text-3xl h-screen gap-5 pt-4 font-semibold'>
            <h2>Kuchbhii details {params.id}</h2>
        </div>
    )
}

export default Details
