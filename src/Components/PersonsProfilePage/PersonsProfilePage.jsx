import elliot from "../../assets/elliot.jpg"
import '../../style/PersonsProfilePage.css'

function PersonsProfilePage({ profileData }) {
  const exampleProfileData = {
    profilePicture: elliot,
    fullName: 'John Doe',
    username: 'john_doe',
    numFriends: 42,
    numCommonFriends: 10,
    numPosts: 20,
  };

  // Utilisez les données de profil réelles ou les exemples si aucune donnée n'est fournie
 profileData = profileData || exampleProfileData;

  const handleSendMessage = () => {
    // Implémentez la logique pour envoyer un message
    console.log('Envoyer un message à', profileData.username);
  };

  const handleSendFriendRequest = () => {
    // Implémentez la logique pour envoyer une demande d'amitié
    console.log('Envoyer une demande d\'amitié à', profileData.username);
  };

  return (
    <div className="persons-profile-container">
      <div className="profile-main">
        <img className="photopro" src={profileData.profilePicture} alt="Profil" />
        <div className="profile-info">
          <h2>{profileData.fullName}</h2>
          <span>@{profileData.username}</span>
        </div>
        <ul className="profile-details-list">
          <ol> {profileData.numFriends}</ol>
          <ol>{profileData.numCommonFriends}</ol>
          <ol> {profileData.numPosts}</ol>
        </ul>
        <ul className="profile-details-list">
          <ol>Amis</ol>
          <ol>Amis en commun</ol>
          <ol>Posts</ol>
        </ul>
        <div className="profile-buttons">
          <button className="request-button" onClick={handleSendFriendRequest}>Envoyer une demande d'amitié</button>
          <button className="request-button1" onClick={handleSendMessage}>Envoyer un message</button>
        </div>
      </div>
      <div className="profile-sidebar">
        {/* La liste des publications peut être rendue ici */}
        <h3>Publications de {profileData.fullName}</h3>
        <div className="post-list">
           {/* Exemple d'éléments avec défilement horizontal */}
           <div className="horizontal-scroll-container">
           <div className="horizontal-scroll-item">Publication 1</div>
            <div className="horizontal-scroll-item">Publication 2</div>
            <div className="horizontal-scroll-item">Publication 3</div>
            {/* Ajoutez d'autres publications ici */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PersonsProfilePage;
