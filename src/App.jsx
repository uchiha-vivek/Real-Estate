 
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SurveyForm from "./components/SurveyForm"

function App(){
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6 ">
      <Hero/>
    </div>
    <SurveyForm/>
    {/* <Feature/> */}
     <Footer/>    
    </>
  )
}

export default App