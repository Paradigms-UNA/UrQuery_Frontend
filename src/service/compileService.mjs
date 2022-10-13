// import httpCommon from "./httpCommon.mjs";

// const compile = (data) => httpCommon.post('/compile', data);

const compile =  (data) =>  `${Date.now()}${data}`

export default { compile };