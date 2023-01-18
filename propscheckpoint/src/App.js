
import Profile from './Profile';
import './App.css';


function App() {
const Fullname = prompt("Please enter your Full Name..");
const Bio = prompt("Write a quick bio..") ;
const Profession = prompt("What's your profession?");
const image = "1.jpeg";
const styles = {fontFamily:'Calibri', color:"red", margin:'auto', padding:'15px'};
const myFunction = () => {
alert(Fullname)
}
  return (
    <>
    <div style ={styles}>
      <Profile Fullname={Fullname} Bio={Bio} Profession={Profession} myFunction={myFunction}>{image}</Profile>
    </div>
    </>
  );
}

export default App;
