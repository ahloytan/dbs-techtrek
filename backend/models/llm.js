'use strict';

const { supabaseWithRLS, supabase } = require('../util/jwt-validator');
const conversationsTable = 'conversation';

module.exports = {  
    async clearChatHistory(token) {
        const { data: { user: { id } } } = await supabase.auth.getUser(token);

        const { data, error } = await supabase
        .from(conversationsTable)
        .delete()
        .eq('user_id', id)

        if (error) throw new Error(error.message);

        return data
    }, 

    async getConversation(token) {
        const { data: { user: { id } } } = await supabase.auth.getUser(token);

        const { data, error } = await supabase
        .from(conversationsTable)
        .select('role, content:message')
        .eq('user_id', id)
        .order('created_at')

        if (error) throw new Error(error.message);

        return data
    },

    async addMessage(token, message, role) {
        const { data: { user: { id } } } = await supabase.auth.getUser(token);
        const { data, error } = await supabaseWithRLS.db
        .from(conversationsTable)
        .insert({ 'user_id': id, message, role })
        .select()

        if (error) throw new Error(error.message);

        return data;
    }
}