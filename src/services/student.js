import backendAPI from '../api/backend';

const registerNewStudent = async (object) => {
  try{
    const response = await backendAPI.post('/api/students', object);
    return [null, response.data];
  }
  catch (e){
    return [e, null];
  }
}

export {
  registerNewStudent
}