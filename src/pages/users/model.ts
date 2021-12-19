import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecord } from './service'
interface UserModelType {
  namespace: string,
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getRemote: Effect,
    edit: Effect
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

    *getRemote(action, { put, call }){ //effects=>(put ,call)

      const { data } = yield call(getRemoteList);//后端接口 把data解构出来
      console.log('effects,getRemote',data)
      yield put({
        type: 'getList',
        payload: data,
      })
    },
    *edit({payload:{id, values}}, { put, call }){ //effects=>(put ,call)

      console.log('efeff edit', id, values)
      const data = yield call(editRecord, {id, values})
      console.log('data',data)
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