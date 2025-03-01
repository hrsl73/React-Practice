import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import Usergreeting from "./UserGreeting";


function App() {
  return(
    <>
    <Header/>
    <Card/>
    <Button/>
    <Food/>
    <Student name="SpongeBob" age={30}/>
    <Student name="Walter White" age={53}/>
    <Student name="DareDevil" age={34}/>
    <Student />
    <Usergreeting name="Harshil"/>
    <Footer/>
    
    </>
  );
}

export default App;