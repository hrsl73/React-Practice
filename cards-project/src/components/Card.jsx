import {Bookmark} from 'lucide-react'

const Card = (job) => {
    
    return (
        <div>
                <div className="parent">

                <div className="card">

                    <div>
                    <div className="top">
                        <img src={job.logo} alt="logo" />
                        <button>Save <Bookmark size={12}/></button>
                    </div>

                    <div className="center">
                        <h3>{job.company} <span>{job.postedDaysAgo}</span></h3>
                        <h2>{job.title}</h2>
                        <div className="tag">
                        <h4>{job.employmentType}</h4>
                        <h4>{job.level}</h4>
                        </div>
                    </div>
                    </div>
                    <div className="bottom">
                        <div>
                        <h3>{job.salary}/{job.salaryUnit}</h3>
                        <p>{job.location}</p>
                        </div>
                    <button>Apply Now</button>
                    </div>
                </div>

    </div>
        </div>
    )
}

export default Card
