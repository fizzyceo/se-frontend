import React, { useState } from "react";
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
import { axiosHelper } from "../../helpers";
import { useConvoStore } from "../../stores/useConvoStore";
const AddConvoModel = ({
  showAddConvModal,
  toggleAddConvModal,
  currentUser,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputLogo, setInputLogo] = useState(null);
  const [logoName, setLogoName] = useState("");
  const { getConvos } = useConvoStore((state) => state);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const AddConv = async () => {
    console.log("***********************************");
    console.log(inputLogo);
    console.log("***********************************");
    // setIsLoading(true);
    const formData = new FormData();
    formData.append("file", inputLogo);
    const createdMessage = await axiosHelper.post(
      "/system/conversation/create",
      {
        nom: inputName,
        photo: formData,
        photoname: logoName,
      }
    );
    console.log(createdMessage);

    setIsLoading(false);

    toggleAddConvModal();
    getConvos();
  };
  return (
    <Modal isOpen={showAddConvModal} toggle={toggleAddConvModal}>
      <ModalHeader toggle={toggleAddConvModal}>{"Add New Chat"}</ModalHeader>
      <ModalBody>
        <Input
          placeholder="Name the chat..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <label htmlFor="">lOGO</label>
        <Input
          placeholder="add Logo..."
          height={50}
          type="file"
          onChange={(e) => {
            setInputLogo(e.target.files[0]);
            setLogoName(e.target.files[0].name);
          }}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={AddConv} disabled={isLoading}>
          {isLoading ? <Spinner size={"sm"} /> : <span>Add</span>}
        </Button>
        <Button
          color="danger"
          onClick={() => {
            toggleAddConvModal();
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

export default AddConvoModel;
