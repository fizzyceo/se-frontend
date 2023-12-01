import BarreTacheH from "../Components/BarreTacheHor/BarreTacheHor"
import BarreTacheV from "../Components/BarreTacheVer/BarreTacheVer"
import FriendsInterface from "../Components/Friends/Friends"
import '../style/PFriends.css'

const PFriends = () => {
  return (
    <div className="dfelx">
      <BarreTacheV/>
      <div className="wdiv">
        <BarreTacheH/>
      <FriendsInterface/>
      </div>
    <div className="ligne"></div>
        
    </div>
  )
}

export default PFriends