import profilePic from './assets/profile.png'

function Card(){
    return (
        <div className="card">
            <br></br>
            <img className="card-img" src={profilePic} alt="this is photo of Me"></img><br></br>
            <h2 className="card-title" >Harshil Mayani</h2>
            <p className="card-text">Lorem ipsum dolor sit amet.</p>
        </div>
    );
}
export default Card;