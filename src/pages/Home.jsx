import Header from "../components/Header";
import Gallery from "../components/Home/Gallery";
import Home_Firstpage from "../components/Home/Home_Firstpage";
import Signup from "../components/Signup"
import Cube from "../components/Home/Cube";
function Firstpage(){
    return(
        <div>
            <Header/>
            <Home_Firstpage/>
            <Gallery/>
        </div>
    )
}

export default Firstpage;