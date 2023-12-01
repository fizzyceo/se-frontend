import BarreTacheH from "../Components/BarreTacheHor/BarreTacheHor"
import BarreTacheV from "../Components/BarreTacheVer/BarreTacheVer"
import PersonsProfilePage from "../Components/PersonsProfilePage/PersonsProfilePage"
import '../style/PPersonsProfilePage.css'

const PPersonsProfilePage = () => {
  return (
    <div className="dfelx">
      <BarreTacheV/>
      <div className="wdiv">
        <BarreTacheH/>
      <PersonsProfilePage/>
      </div>
    <div className="ligne"></div>
        
    </div>
  )
}

export default PPersonsProfilePage