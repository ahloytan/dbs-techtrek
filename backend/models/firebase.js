const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const firebase = require('firebase-admin');
const serviceAccount = require('../modules/firestore-credentials.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const usersAccountCollection = db.collection('user_account');
const customersCollection = db.collection('customers');
const countriesCollection = db.collection('countries');
const destinationsCollection = db.collection('destinations');
const itinerariesCollection = db.collection('itineraries');


//https://firebase.google.com/docs/firestore/manage-data/add-data

//User
async function getByUsername(username) {
    const snapshot = await usersAccountCollection.where('username', '==', username.toLowerCase()).get();
    const data = snapshot.docs[0]?.data();
    return data;
}

//Customer
async function addCustomer(address, avatar, email, name, phoneNumber) {

    const data = {
        address: address,
        avatar: avatar,
        created_at: firebase.firestore.Timestamp.now(),
        email: email,
        name: name,
        phone_number: phoneNumber,
    };

    const res = await customersCollection.add(data);
    return res;
}
async function getAllCustomers() {
    const res = []
    const snapshot = await customersCollection.get();
    snapshot.forEach((doc) => {
    //   console.log(doc.id, '=>', doc.data());
      let each = doc.data();
      each['id'] = doc.id;
      each['created_at'] = (each.created_at).toDate();
      res.push(each);
    });
    return res;
}
async function updateCustomer() {
    const res = await customersCollection.doc('LA').update({
        name: 'KOBE BRYANT'
    });
    return res;
}
async function deleteCustomer() {
    const res = await customersCollection.doc('LA').delete();
    return res;
}

//Itinerary
async function getUserItineraries(userID) {
    let res = []
    const countries = await countriesCollection.get();

    const itineraries = await itinerariesCollection.where('user_id', '==', userID).get();
    itineraries.forEach((doc) => {
        let each = doc.data();
        each['id'] = parseInt(doc.id);
        each['country_name'] = countries.docs[each.country_id-1].data().name
        res.push(each)
    })
    
    const customers = await getAllCustomers();
    customers.forEach((doc) => {
        if (res[doc.id]) res[doc.id]['name'] = doc.name;
    })

    return res;
}

module.exports = {  
    getByUsername,
    addCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer, 
    getUserItineraries,
};