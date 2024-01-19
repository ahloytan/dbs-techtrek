const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../modules/firestore-credentials.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const table = 'customers';
const collection = db.collection(table)

//https://firebase.google.com/docs/firestore/manage-data/add-data
module.exports = {  
    async addCustomer() {
        const data = {
            email: 'test@test.com',
            name: 'Los Angeles',
            country: 'USA'
        };
          
          // Add a new document in collection "cities" with ID 'LA'
        const res = await collection.doc('LA').set(data);
        return res;
    },
    async getAllCustomers() {
        const snapshot = await collection.get();
        // snapshot.forEach((doc) => {
        //   console.log(doc.id, '=>', doc.data());
        // });
        return snapshot;
    },
    async updateCustomer() {
        const res = await collection.doc('LA').update({
            name: 'KOBE BRYANT'
        });
        return res;
    },
    async deleteCustomer() {
        const res = await collection.doc('LA').delete();
        return res;
    }
  };