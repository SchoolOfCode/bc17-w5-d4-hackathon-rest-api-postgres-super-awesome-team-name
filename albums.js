
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAlbums() {
  const queryText = 'SELECT * FROM albums'
  const result = await pool.query(queryText)
  return result.rows;
  // Query the database and return all resource ones
}

export async function getAlbumsById(id) {
  const queryText = 'SELECT * FROM albums WHERE id = $1'
  const result = await pool.query(queryText, [id])
  console.log("HI")
  return result.rows[0] || null;

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