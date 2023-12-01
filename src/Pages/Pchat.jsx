import BarreTacheH from "../Components/BarreTacheHor/BarreTacheHor"
import BarreTacheV from "../Components/BarreTacheVer/BarreTacheVer"
import ChatInterface from "../Components/Chat/chat"
import '../style/Pchat.css'


const Pchat = () => {
  return (
    <div className="dfelx">
      <BarreTacheV/>
      <div className="wdiv">
        <BarreTacheH/>
      <ChatInterface/>
      </div>
    <div className="ligne"></div>
        
    </div>
  )
}

export default Pchat