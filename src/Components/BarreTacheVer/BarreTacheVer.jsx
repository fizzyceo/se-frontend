import feed from "../../assets/feed.png";
import post from "../../assets/post.png";
import chat from "../../assets/chat.png";
import friends from "../../assets/amis.png";
import Logout from "../../assets/logout.png";
import profile from "../../assets/utilisateur.png";
import fsociety from "../../assets/icons8fsociety50.png";
import "../../style/NavVer.css";
function BarreTacheV() {
  const items = [
    { icon: fsociety, text: "fsociety", link: "#" },
    { icon: feed, text: "feed", link: "./feed" },
    { icon: post, text: "post", link: "./post" },
    { icon: chat, text: "chat", link: "./chat" },
    { icon: friends, text: "Friends", link: "./friends" },
    { icon: profile, text: "Profile", link: "./profile" },

    { icon: Logout, text: "Logout", link: "./logout" },
  ];

  const handleItemClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="Nav-ver">
      <ul className="list-NavBarV">
        {items.map((item, index) => (
          <li
            className={item.text}
            key={index}
            onClick={() => handleItemClick(item.link)}
          >
            <img
              className="imaghover"
              style={{ width: "32px" }}
              src={item.icon}
              alt={`Icon ${index}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BarreTacheV;
