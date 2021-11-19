import { openDB } from 'idb'
import { Entry } from './models';

const DATABASE_NAME = "RENTALZDB";

initDB().then(() => {
  console.log('database initialize!')
})


async function initDB() {
  const db = await openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('entry', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
    },
  });
}

export async function insertEntry(entry: Entry) {
  const db = await openDB(DATABASE_NAME, 1)
  const tx = db.transaction('entry', 'readwrite');
  const store = tx.objectStore('entry');
  await store.put(entry)
}


