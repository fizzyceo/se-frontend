// BarreTacheHor.jsx
import Friendship from "../../assets/friends.svg";
import Notifications from "../../assets/icons8notification2.png";
import UserIcon from "../../assets/pfpuser.png"; 
import '../../style/NavHor.css'

function BarreTacheH() {
  const items = [
    { icon: Friendship,text:'Friendship', link: '../Pages/FriendshipPage' },
    {icon:Notifications ,text: 'Notifications' }
  ];

  const handleItemClick = (link) => {
    window.location.href = link;
  };

  const user = {
    username: 'NomUtilisateur',
    name: 'Mr.Fxl', // Remplacez par le nom réel de l'utilisateur
    avatar: UserIcon,
  };

  return (
    <div className="barre-tache-hor">
      {/* Barre de recherche */}
      <input type="text" placeholder="Rechercher..." className="barre-recherche" />

      {/* Icônes de la barre de tâches */}
      <ul className="list-NavBarH">
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item.link)}>
            <img src={item.icon} alt={`Icon ${index}`} className={item.text} />
            <span className="span1">{item.text}</span>
          </li>
        ))}
      </ul>
       {/* Informations sur l'utilisateur */}
       <ol className="user-info">
          <img src={user.avatar} alt="User" className="imguser" />
          <span className="spanname">{user.name}</span>
          <span className="spanuser">@{user.username}</span>
        </ol>
      
    </div>
    
  );
}

export default BarreTacheH;

