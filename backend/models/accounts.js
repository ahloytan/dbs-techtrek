'use strict';
const { supabase } = require('../util/db.js');
const userAccountTable = 'user_account';

module.exports = {  
  async getUserUUIDFromChatId(chatID) {
    const { data, error } = await supabase
    .from(userAccountTable)
    .select('id')
    .eq('telegram_chat_id', chatID)

    return data;
  },  
}