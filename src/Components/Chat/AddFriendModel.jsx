import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import React, { useEffect, useState } from "react";
import { axiosHelper } from "../../helpers";

const AddFriendModel = ({
  showAddFriendModal,
  toggleAddFriendModal,
  selectedConversation,
  currentUser,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const fetchFriendsData = async (userId) => {
    try {
      // Example fetching logic using supabase
      const { data, error } = await axiosHelper.post("/system/user/get", {
        idu: userId,
      });

      if (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data");
      }

      return data.data[0];
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  };
  const extractDifferentUserIds = (currentUser, friendData) => {
    const friendUsers = [];

    for (const friend of friendData) {
      if (friend.iduser1 !== currentUser) {
        friendUsers.push(friend.iduser1);
      } else if (friend.iduser2 !== currentUser) {
        friendUsers.push(friend.iduser2);
      }
    }
    const uniqueFriendUsers = [...new Set(friendUsers)];

    return uniqueFriendUsers;
  };
  useEffect(() => {
    const fetchFriends = async () => {
      const response = await axiosHelper.post("/system/friend/get", {
        currentUser: currentUser,
      });
      console.log(response);
      const friends = extractDifferentUserIds(currentUser, response.data);
      const friendsInfo = [];
      for (const friend of friends) {
        friendsInfo.push(await fetchFriendsData(friend));
      }
      console.log(friendsInfo);
      setFriendsList(friendsInfo);
    };

    fetchFriends();
  }, []);
  const addFriendToChat = async () => {
    if (selectedFriend) {
      setIsLoading(true);
      const createdMessage = await axiosHelper.post("/system/groupe/create", {
        idconv: selectedConversation,
        idu: selectedFriend,
      });
      console.log(createdMessage);

      setIsLoading(false);

      toggleAddFriendModal();
    } else {
    }
  };
  return (
    <Modal isOpen={showAddFriendModal} toggle={toggleAddFriendModal}>
      <ModalHeader toggle={toggleAddFriendModal}>
        {"Add New Friend"}
      </ModalHeader>
      <ModalBody>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Friends</DropdownToggle>
          <DropdownMenu>
            {friendsList.length > 0 &&
              friendsList.map((friend) => (
                <DropdownItem
                  key={friend.idu}
                  onClick={() => {
                    setSelectedFriend(friend.idu);
                  }}
                >
                  {friend.nom} {friend.prenom}
                </DropdownItem>
              ))}
          </DropdownMenu>
        </Dropdown>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={addFriendToChat} disabled={isLoading}>
          {isLoading ? <Spinner size={"sm"} /> : <span>Add</span>}
        </Button>
        <Button
          color="danger"
          onClick={() => {
            toggleAddFriendModal();
            // formik.resetForm();
          }}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddFriendModel;
