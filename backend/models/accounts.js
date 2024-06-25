'use strict';
const { supabase } = require('../util/db.js');
const userAccountTable = 'user_account';

module.exports = {  
  async getUserFromChatId(chatID) {
    const { data, error } = await supabase
    .from(userAccountTable)
    .select('id, role_id')
    .eq('telegram_chat_id', chatID)
    .limit(1)
    .single()

    if (error) throw new Error(error.message);

    return data;
  },  
}