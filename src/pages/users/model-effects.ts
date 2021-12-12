import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
interface UserModelType {
  namespace: string,
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getRemote: Effect
  },
  subscriptions: {
    setup: Subscription;
  }
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state, {payload}) { //state上一次状态/数据  action={type, payload}

      return payload;
      // return data
    }
  },
  effects: {
    // *func_name(action, effects){ //action={type, payload}
    //   //yield put()
    // }

    *getRemote(action, { put }){ //effects=>(put ,call)
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

      yield put({
        type: 'getList',
        payload: data,
      })
    }
    
  },
  subscriptions: {
    setup({ dispatch, history }){
      // let unlisten = history.listen(({ location, action }) => {
      //   console.log(action, location.pathname, location.state);
      // });
      return history.listen((location) => {
        if(location.pathname === '/users') {
          dispatch({
            type: 'getRemote',  //getList 触发
            payload: {},//除了type外数据 放到payload 如data
          })
        }
      })
    }
    
  }
}

export default UserModel;