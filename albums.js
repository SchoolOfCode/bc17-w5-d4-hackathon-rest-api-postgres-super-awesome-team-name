
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAlbums() {
  const queryText = 'SELECT * FROM albums'
  const result = await pool.query(queryText)
console.log("hello")
  return result.rows;
  // Query the database and return all resource ones
}

export async function getAlbumsById(id) {
  // Query the database and return the resource with a matching id or null
}

export async function createAlbums(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateAlbumsById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteAlbumsById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}