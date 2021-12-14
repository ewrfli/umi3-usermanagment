import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd';

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
  const [form] = Form.useForm();
 
  useEffect( ()=>{
    form.setFieldsValue(props.record)
  }, [props.visible] )  //props.visible有变化 才执行 form.setFieldsValue(props.record)  相当于mount


  return (
    <>
      <Modal title="Basic Modal" visible={props.visible} onOk={props.handleOk} onCancel={props.handleCancel} forceRender>
        {/* <p>{JSON.stringify(props.record)}</p> */}
        <Form
          form={form}
          name="basic"
          initialValues={ props.record }
        >
          <Form.Item
            label="Name"
            name="name"  
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item> 

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item> 
          
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item> 

          <Form.Item
            label="Tags"
            name="tags"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item> 

        </Form>
      </Modal>
    </>
  );
};
export default UserModal;