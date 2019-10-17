import axios from "../../utils/fetch";
import md5 from 'js-md5'

const user = {
    state:{
        list: [],
		userTotal: 0,
		name: '',
		username: '',
		roles: null,
		otherList: []
    },
    mutations:{
        SET_TOKEN (state, token) {
			state.token = token;
		},
		SET_USERINFO (state, info) {
			state.name = info.name;
			state.username = info.username;
			state.roles = info.roles;
		},
		USERLIST (state, data) {
			state.list = data.list
			state.total = data.total;
		},
		GET_INFOLIST (state, data) {
			state.otherList = data;
		},
		CLEARINFO (state) {
			state.name = '';
			state.username = '';
			state.roles = null;
        },
        LOGIN(state, user){
            state.username=user.username;
            state.password=user.password;
            window.sessionStorage.setItem('user',JSON.stringify({'userName':user.username,'pwd':user.password}));
        },
        LOGOUT(state){
            state.username=null;
            state.password=null;
            window.sessionStorage.removeItem('user');
        },
        ADDUSER(state, user){
            user.password = md5(user.password)
			
        },
        DELUSER(state, id){
            
        },
        UPDATEUSER(state, data){
            data.pwd = md5(data.pwd)
			data.old_pwd = md5(data.old_pwd)
			
        }
    },
    actions:{
        clearInfo ({commit}) {
			commit('CLEARINFO')
		},
        userLogin({state,commit}, user){
            commit('LOGIN',user)
           
            let {username, password} = user;
            return new Promise( (resolve, reject) => {
				axios.post('user/login',{
					username: username,
					password: md5(password)
				}).then( res => {
					console.log('res***********'+JSON.stringify(res))
                    resolve(res)
				}).catch( err => {
					console.log('err***********'+err)
                    reject(err)
				})
			})
           
        },
        logout({commit}){
            commit('LOGOUT')
        },
        getUserList ({commit}, params) {
			return new Promise( (resolve, reject) => {
				axios.get('user/list', params).then( res => {
					console.log(res)
					commit('USERLIST', res.data)
					resolve(res)
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
			})
		},
		addUser ({commit}, data) {
            commit('ADDUSER',data)
            return new Promise( (resolve, reject) => {
				axios.post('user/add', user)
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		delUser ({commit}, id) {
			return new Promise( (resolve, reject) => {
				axios.get('user/del', {id: id})
					.then( res => {
						resolve(res)
					}).catch( err => {
						reject(err)
					})
			})
		},
		updateUser ({commit}, data) {
            commit('UPDATEUSER', data)
            return new Promise( (resolve, reject) => {
				axios.post('user/update', data)
					.then( res => {
						resolve(res)
					}).catch( err => {
                        reject(err)
                        return;
					})
			})
		}
    }
}

export default user