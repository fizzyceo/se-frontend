import React, { useState } from "react";
import elliot from "../../assets/elliot.jpg";
import robot from "../../assets/robot.jpg";
import "../../style/Friends.css";

const FriendsInterface = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  //data that we r supposed to get from the db
  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: "Fayçal", username: "Mr.Fxl", image: elliot },
    { id: 2, name: "Berbar", username: "Anonymous", image: robot },
  ]);

  const [friends, setFriends] = useState([
    //data t3 db , this is whatever
    { id: 101, name: "Friend 1", deleted: false },
    { id: 102, name: "Friend 2", deleted: false },
  ]);
  const handleUserClick = (id) => {
    //le code t3 user's profile
    //obviously u'll be needing the userId so i took it a s a parameter
    console.log(`Clicked user's ID: ${id}`);
  };

  const handleAccept = (id) => {
    //the code for adding accepted invitations to the Friends list will be written here normalement
    setAcceptedRequests([...acceptedRequests, id]);
  };

  const handleDelete = (id) => {
    //add the code to delete a user from the db and stuff
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.id !== id)
    );
  };

  const handleReject = (id) => {
    // delete l request m db
    setFriendRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
  };
  //a new section that lists all the users and people can sent invites

  return (
    <div className="friends-interface">
      <div className="friend-requests">
        <h2>Friend Requests</h2>
        <div className="friend-request-container">
          {friendRequests.map((request) => (
            <div
              key={request.id}
              className="friend-request"
              onClick={() => handleUserClick(request.id)}
            >
              <img src={request.image} alt="ellio" className="eliot" />
              <span className="spanname">{request.name}</span>
              <span className="spanuser">@{request.username}</span>
              {acceptedRequests.includes(request.id) ? (
                <p>Accepted</p>
              ) : (
                <div className="divbut">
                  <button
                    className="request-button"
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="request-button1"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
          {friendRequests.length === 0 && <p>No friend requests</p>}
        </div>
      </div>

      <div className="friends-list">
        <h2>Friends</h2>
        <div className="friends-container">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="friend"
              onClick={() => handleUserClick(friend.id)}
            >
              <span>{friend.name}</span>
              {friend.deleted ? (
                <p>Deleted</p>
              ) : (
                <button
                  className="request-button"
                  onClick={() => handleDelete(friend.id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          {friends.length === 0 && <p>No friends</p>}
        </div>
      </div>
      <div className="">
        <h2>Discover new People</h2>
        {/**list users that are not friends or did not sent you invites  */}
      </div>
    </div>
  );
};

export default FriendsInterface;

// Good luck
