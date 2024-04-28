'use strict';

const { supabaseWithRLS } = require('../util/jwt-validator');
const destinationsTable = 'destination';

module.exports = {  
    async addDestination(country_id, cost, name, notes, image_name) {
        const doesDestinationExist = await this.getDestination(name);
        if (doesDestinationExist.length > 0) throw new Error("Destination already exist!"); 
    
        const { data, error } = await supabaseWithRLS.db
        .from(destinationsTable)
        .insert({ country_id, cost, name, notes, image_name })
        .select()
    
        if (error) throw new Error(error.message);
        
        return data;
    },
    async getDestination(name) {
        const { data, error } = await supabaseWithRLS.db
        .from(destinationsTable)
        .select()
        .eq('name', name)
    
        if (error) throw new Error(error.message);
    
        return data;
      },  
    async getAllDestinations() {
        const { data, error } = await supabaseWithRLS.db
        .from(destinationsTable)
        .select()
    
        if (error) throw new Error(error.message);
    
        return data;
    },
    async deleteDestination(ids) {
        const { error } = await supabaseWithRLS.db
        .from(destinationsTable)
        .delete()
        .in('id', ids)
    
        if (error) throw new Error(error.message);

    }
}