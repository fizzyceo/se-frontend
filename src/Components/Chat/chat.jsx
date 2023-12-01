import React, { useEffect, useState } from "react";
import "../../style/chat.css";
import { axiosHelper } from "../../helpers";
import { useAuth } from "../../stores/useAuth";
import ChatBody from "./ChatBody";
import AddConvoModel from "./AddConvoModel";
import plus from "../../assets/plus.png";
import { useConvoStore } from "../../stores/useConvoStore";

const ChatInterface = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [selectedConvoMessages, setSelectedConvoMessages] = useState(null);
  const [showAddConvoModal, setShowConvoAddModel] = useState(false);
  const { getConvos, convos } = useConvoStore((state) => state);
  const toggleAddConvModal = () => {
    setShowConvoAddModel(!showAddConvoModal);
  };
  const [convList, setConvList] = useState(null);
  // these are just s that i can try the code , they will be changed by the ones from the backend
  const { user } = useAuth((state) => state);
  useEffect(() => {
    const convsFetching = async () => {
      try {
        getConvos(user.data[0].idu);
      } catch (err) {
        console.log(err);

        throw err;
      }
    };

    convsFetching();
  }, []);
  useEffect(() => {
    if (convos.length > 0) {
      setConvList(convos);
    }
  }, [convos]);

  const handleConversationClick = async (conversationId) => {
    //fetch messages from that convo
    const response = await axiosHelper.post("/system/message/get", {
      idconv: conversationId,
    });
    if (response.data.status === 200) {
      setSelectedConvoMessages(response.data.data);
    }
    setSelectedConversation(conversationId);
  };

  return (
    <div className="chat-container">
      <div className="conversation-list">
        {/*just a random text for the test */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "2px",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=""
        >
          <h2>Conversations</h2>
          <button
            onClick={toggleAddConvModal}
            className=""
            style={{
              width: "100%",
              background: "transparent",
              padding: " 0px",
              marginRight: "5px",
              borderTopRightRadius: "20%",
              border: "1px solid black",
            }}
          >
            <img src={plus} alt="add" />
          </button>
        </div>
        <ul>
          {convList?.length > 0 &&
            convList.map((conversation) => (
              <li
                key={conversation.idconv}
                onClick={() => handleConversationClick(conversation.idconv)}
              >
                {conversation.nom}
              </li>
            ))}
        </ul>
      </div>
      <div className="conversation-content">
        {selectedConversation ? (
          <div className="message-content">
            <ChatBody
              selectedConversation={selectedConversation}
              messages={selectedConvoMessages}
              currentUser={user?.data[0]?.idu}
            />
          </div>
        ) : (
          <div className="no-conversation-selected">
            <p>Choose a Chat to view content</p>
          </div>
        )}
      </div>
      <AddConvoModel
        currentUser={user.data[0].idu}
        showAddConvModal={showAddConvoModal}
        toggleAddConvModal={toggleAddConvModal}
      />
    </div>
  );
};

export default ChatInterface;
