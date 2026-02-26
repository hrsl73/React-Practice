import './App.css'
import Card from './components/Card'

function App() {

  const jobOpenings = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    postedDaysAgo: 5,
    title: "Senior UI/UX Designer",
    employmentType: "Part Time",
    level: "Senior Level",
    salary: 120,
    salaryUnit: "hr",
    location: "Mumbai, India",
    isSaved: false
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    postedDaysAgo: 2,
    title: "Frontend Developer",
    employmentType: "Full Time",
    level: "Mid Level",
    salary: 40,
    salaryUnit: "hr",
    location: "Bangalore, India",
    isSaved: false
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    postedDaysAgo: 7,
    title: "Product Designer",
    employmentType: "Full Time",
    level: "Senior Level",
    salary: 135000,
    salaryUnit: "year",
    location: "Hyderabad, India",
    isSaved: true
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    postedDaysAgo: 1,
    title: "UI Engineer",
    employmentType: "Contract",
    level: "Mid Level",
    salary: 85,
    salaryUnit: "hr",
    location: "Remote",
    isSaved: false
  },
  {
    id: 5,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    postedDaysAgo: 3,
    title: "UX Researcher",
    employmentType: "Full Time",
    level: "Senior Level",
    salary: 125000,
    salaryUnit: "year",
    location: "Pune, India",
    isSaved: false
  },
  {
    id: 6,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    postedDaysAgo: 10,
    title: "Interaction Designer",
    employmentType: "Part Time",
    level: "Junior Level",
    salary: 30,
    salaryUnit: "hr",
    location: "Delhi, India",
    isSaved: true
  },
  {
    id: 7,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    postedDaysAgo: 4,
    title: "Visual Designer",
    employmentType: "Full Time",
    level: "Mid Level",
    salary: 95000,
    salaryUnit: "year",
    location: "Remote",
    isSaved: false
  },
  {
    id: 8,
    company: "Meta",
    logo: "https://logo.svgcdn.com/logos/meta.png",
    postedDaysAgo: 6,
    title: "Frontend Architect",
    employmentType: "Full Time",
    level: "Senior Level",
    salary: 150000,
    salaryUnit: "year",
    location: "Gurgaon, India",
    isSaved: false
  },
  {
    id: 9,
    company: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    postedDaysAgo: 8,
    title: "UI Developer",
    employmentType: "Contract",
    level: "Mid Level",
    salary: 70,
    salaryUnit: "hr",
    location: "Chennai, India",
    isSaved: false
  },
  {
    id: 10,
    company: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    postedDaysAgo: 12,
    title: "Senior Product Designer",
    employmentType: "Full Time",
    level: "Senior Level",
    salary: 140000,
    salaryUnit: "year",
    location: "Noida, India",
    isSaved: true
  }
];
  
  return (
    <div className="parent">
      {jobOpenings.map((job,indx) => {
        return <div key={indx}>
                  <Card 
                    company={job.company}
                    logo = {job.logo}
                    daysAgo={job.postedDaysAgo}
                    title={job.title}
                    employmentType={job.employmentType}
                    level={job.level}
                    salary={job.salary}
                    salaryUnit={job.salaryUnit}
                    location={job.location}
                  />
        </div>
      })}
    </div>
  )
}

export default App
