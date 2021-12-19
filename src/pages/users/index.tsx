// @flow 
import React, { useState } from 'react';
import { Table, Tag, Space, Popconfirm  } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal'
type Props = {
  
};
const index = ({users, dispatch}) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [record, setRecord] = useState(undefined)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={ ()=> {
            editeHandler(record);
          }}>Edit</a>
          
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const confirm = () => {
    console.log('confirm')
  }
  const editeHandler = (record) => { // hook: modalVisible
    setModalVisible(true);
    console.log(record)
    setRecord(record);
  }
  const handleOk = () => {
    setModalVisible(false);
  }
  const handleCancel = () => {
    setModalVisible(false);
  }
 
  const onFinish = (values: any) => {
    console.log('values',values);
    //用 dispatch 沟通 model异步effect 
    const id = record.id;
    dispatch({
      type: 'users/edit',
      payload: {
        id,
        values
      }
    })
  };

  return (
    <div className='lest-table'>
      <Table columns={columns} dataSource={users.length ? users : []} rowKey='key' />
      <UserModal 
        visible={modalVisible} 
        handleOk={handleOk} 
        handleCancel={handleCancel} 
        record={record}
        onFinish={onFinish}
      >

      </UserModal>
    </div>
    
  );
};

const mapStateToProps = ({ users }) => { ///state
  return {
    users,  //namespace: 'users',
  }
}

export default connect(mapStateToProps)(index);