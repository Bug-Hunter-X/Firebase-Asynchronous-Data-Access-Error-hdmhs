// Correct Implementation using async/await
async function getData() {
  const snapshot = await db.collection('myCollection').doc('myDocument').get();
  if (snapshot.exists) {
    const data = snapshot.data();
    console.log(data.myField); // Access data after it has loaded
  } else {
    console.log('Document does not exist');
  }
}

getData();

//Alternative using Promises
db.collection('myCollection').doc('myDocument').get().then(snapshot => {
  if (snapshot.exists) {
    const data = snapshot.data();
    console.log(data.myField);
  } else {
    console.log('Document does not exist');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});