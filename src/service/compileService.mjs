import httpCommon from "./httpCommon.mjs";

const wait = (milis) => new Promise(resolve => setTimeout(resolve, milis))

// const compile = (data) => httpCommon.post('/compile', data);

const compile =  (data) => new Promise(resolve => setTimeout(resolve(`${Date.now()}${data}`), 3000))

export default { compile };