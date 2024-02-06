const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../modules/firestore-credentials.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const usersAccountCollection = db.collection('user_account');
const customersCollection = db.collection('customers');

//https://firebase.google.com/docs/firestore/manage-data/add-data
module.exports = {  
    //User
    async getByUsername(username) {
        const snapshot = await usersAccountCollection.where('username', '==', username.toLowerCase()).get();
        const data = snapshot.docs[0]?.data();
        return data;
    },

    //Customer
    async addCustomer() {
        const data = {
            email: 'test@test.com',
            name: 'Los Angeles',
            country: 'USA'
        };
          
          // Add a new document in collection "cities" with ID 'LA'
        const res = await customersCollection.doc('LA').set(data);
        return res;
    },
    async getAllCustomers() {
        const snapshot = await customersCollection.get();
        // snapshot.forEach((doc) => {
        //   console.log(doc.id, '=>', doc.data());
        // });
        return snapshot;
    },
    async updateCustomer() {
        const res = await customersCollection.doc('LA').update({
            name: 'KOBE BRYANT'
        });
        return res;
    },
    async deleteCustomer() {
        const res = await customersCollection.doc('LA').delete();
        return res;
    }
  };