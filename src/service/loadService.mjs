//import httpCommon from "./httpCommon.mjs";

//const compile = (data) => httpCommon.post('/compile', data);

const loading =  (data) =>  `${Date.now()}${data}`

export default { loading };