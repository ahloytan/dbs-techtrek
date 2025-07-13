import api from '../utils/axios.js';

const clearUserChat = async (model, prompt) => {
  try {
    const {data: { data }} = await api.delete(`/llm/clear-user-chat`);
    return data;
  } catch (error) {
    console.log(error);
    // throw new Error(error);
    const errorMsg = "Something went wrong. Please try clearing chat again. If all else fails, please contact the administrator (https://ahloytan.netlify.app/)"
    return errorMsg;
  }
}

const sendPromptToLLM = async (model, prompt) => {
  try {
    const {data: { data }} = await api.post(`/llm/${model}`, {
        prompt
    });
    return data;
  } catch (error) {
    console.log(error);
    // throw new Error(error);
    const errorMsg = "Something went wrong. Please try again with another model. If all else fails, please contact the administrator (https://ahloytan.netlify.app/)"
    return errorMsg;
  }
}

const getChatHistory = async () => {
  try {
    const {data: { data }} = await api.get(`/llm/chat-history`);
    return data;
    
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
  }
}

export { clearUserChat, sendPromptToLLM, getChatHistory };