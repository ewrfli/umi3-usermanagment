// @flow 
import React, { useState } from 'react';
import { Table, Tag, Space  } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal'
type Props = {
  
};
const index = ({users}) => {

  const [modalVisible, setModalVisible] = useState(false)


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
            setModalVisible(true);
          }}>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  

  const visbleHandler = () => {
    setModalVisible(true);
  }

  return (
    <div className='lest-table'>
      <Table columns={columns} dataSource={users.length ? users : []} />
      <UserModal visible={modalVisible}></UserModal>
    </div>
    
  );
};

const mapStateToProps = ({ users }) => { ///state
  return {
    users,  //namespace: 'users',
  }
}

export default connect(mapStateToProps)(index);