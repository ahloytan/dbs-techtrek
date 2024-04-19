import api from '../utils/axios.js';

const sendPromptToLLM = async (model, prompt) => {
  try {
    const {data: { data }} = await api.post(`/llm/${model}`, {
        prompt
    });
    return data;
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
}

export { sendPromptToLLM };