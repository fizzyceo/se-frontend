import React, { useEffect, useState } from "react";
import "./chat.css";
import { axiosHelper } from "../../helpers";
import AddFriendModel from "./AddFriendModel";
import io from "socket.io-client";

const ChatBody = ({ selectedConversation, messages, currentUser }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [showAddFriendModal, setShowFriendAddModel] = useState(false);
  const [socket, setSocket] = useState(null);
  const [messagesList, setMessages] = useState(messages);
  const toggleAddFriendModal = () => {
    setShowFriendAddModel(!showAddFriendModal);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:5000");

    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    newSocket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Listen for new messages from the server
    if (socket) {
      socket.on("new_message", (newMessage) => {
        // Handle the received message from the server
        // Update messages state with the newMessage
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        // For example: setMessages([...messages, newMessage]);
        console.log("Received new message:", newMessage);
      });
    }
  }, [socket]);

  const sentMessage = async () => {
    if (!currentUser) {
      return;
    }
    const createdMessage = await axiosHelper.post("/system/message/create", {
      idconv: selectedConversation,
      sender: currentUser,
      text: inputMessage,
    });
    console.log(socket, createdMessage);
    if (socket && createdMessage.data) {
      console.log(socket, createdMessage.data.data[0]);
      socket.emit("send_message", createdMessage.data.data[0]);
      console.log("emitted.....");
    }
    setInputMessage("");
  };

  return (
    <>
      <div className="chat_body">
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Chat {selectedConversation}</h2>
          <button
            className="add_friend_button"
            onClick={() => setShowFriendAddModel((model) => !model)}
          >
            Add Friend
          </button>
        </div>
        <hr className="solid" />

        <div className="messages">
          {messagesList.length > 0 &&
            messagesList.map((message) => (
              <div
                key={message.idmsg}
                className={`${
                  message.sender === currentUser
                    ? "my_message_structure"
                    : "their_message_structure"
                }`}
              >
                <div>sender {message.sender}</div>
                <div
                  className={`${
                    message.sender === currentUser
                      ? "my_message"
                      : "their_message"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="input_wrapper">
          <input
            className="message_input"
            onChange={(e) => setInputMessage(e.target.value)}
            type="text"
            placeholder="write your message..."
          />
          <button
            className="sent_message_button"
            onClick={() => {
              sentMessage();
            }}

            // onClick={sentMessage}
          >
            sent
          </button>
        </div>
      </div>
      <AddFriendModel
        selectedConversation={selectedConversation}
        currentUser={currentUser}
        showAddFriendModal={showAddFriendModal}
        toggleAddFriendModal={toggleAddFriendModal}
      />
    </>
  );
};

export default ChatBody;
