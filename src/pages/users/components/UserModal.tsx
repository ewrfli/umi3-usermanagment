import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const UserModal = (props) => { //props是只读
  const [isModalVisible, setIsModalVisible] = useState(true);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      <Modal title="Basic Modal" visible={props.visible} onOk={props.handleOk} onCancel={props.handleCancel}>
        <p>{JSON.stringify(props.record)}</p>
      </Modal>
    </>
  );
};
export default UserModal;