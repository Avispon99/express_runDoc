export const add = (num1, num2) => num1 +num2

export default {

  notFound(customMessage) {
    return {
      status: 404,
      message: customMessage || 'Not found', // if custommessage is not specify then 'Not found' would by message for default
    };
  },

  internalServerError(customMessage) {
    return {
      status: 500,
      message: customMessage || 'Internal server error',
    };
  },
  
};