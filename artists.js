
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtists() {
  const queryText = 'SELECT * FROM artists'
  const result = await pool.query(queryText)
  return result.rows;
  // Query the database and return all resource twos
}

export async function getArtistsById(id) {
  const queryText = "SELECT * FROM artists WHERE id = $1"
  const result = await pool.query(queryText, [id])
  return result.rows[0];
  // Query the database and return the resource with a matching id or null
}

export async function createArtists(artist) {
  // Query the database to create an resource and return the newly created resource
  const queryText = "INSERT INTO artists (name) VALUES ($1) RETURNING *"
  const result = await pool.query(queryText, [artist.name])
  return result.rows[0];

 
  }
  
export async function updateArtistsById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteArtistsById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}