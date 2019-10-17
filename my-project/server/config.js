const port = process.env.NODE_ENV === 'production' ? '80' : '3005'
const auth = {
    admin_secret: 'admin-token',
    tokenKey: 'Token-Auth',
    whiteList: ['login', 'client_api'],
    blackList: ['admin_api']
}
const conf = {
    env: process.env.NODE_ENV,
    port,
    auth,
    mongodb: {
        username: 'root',
        pwd: 'root1234',
        address: 'localhost:27017',
        db: 'test'
    }
}
export default conf