// Import the required modules
import express from "express";
import morgan from "morgan";


// Import your helper functions for your albums here
import {
  getAlbums,
  getAlbumsById,
  createAlbums,
  updateAlbumsById,
  deleteAlbumsById,
} from "./albums.js";


// Import your helper functions for your artists here
import {
  getArtists,
  getArtistsById,
  createArtists,
  updateArtistsById,
  deleteArtistsById,
} from "./artists.js";
import e from "express";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests
app.use(morgan("dev")); // morgan() middleware is used to log the incoming requests



// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/albums/", async function (req, res) {
  try{
    const albums = await getAlbums()
    console.log("hi")
    res.status(200).json({
      success: true,
      payload: albums
    }
    )}
    catch(error) {
      res.status(400).json({
        success: false,
        payload: error
        
      }
      )
    }

  });

// Endpoint to retrieve a <resource_one> by id
app.get("/albums/:id", async function (req, res) {
  const id = req.params.id;
  try {
    const albums = await getAlbumsById(id);
    if (!albums) {
      return res.status(400).json({
        success: false,
        payload: "Album not found" 
      });
    }
    return res.status(200).json({
      success: true,
      payload: albums
    });
  } catch (error) {
    console.error('Error fetching album:', error);
    return res.status(500).json({
      success: false,
      payload: error.message // Return error message
    });
  }
});


// Endpoint to create a new <resource_one>
app.post("/albums/", async function (req, res) {

});

// Endpoint to update a specific <resource_one> by id
app.patch("/albums/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/albums/:id", async function (req, res) {
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/artists/", async function (req, res) {
  try{
    const artists = await getArtists()
    
    res.status(200).json({
      success: true,
      payload: artists
    }
    )}
    catch(error) {
      res.status(400).json({
        success: false,
        payload: error
        
      }
      )
    }

  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/artists/:id", async function (req, res) {
    const id = req.params.id;
  try {
    const artists = await getArtistsById(id);
    if (!artists) {
      return res.status(400).json({
        success: false,
        payload: "Artist not found" 
      });
    }
    return res.status(200).json({
      success: true,
      payload: artists
    });
  } catch (error) {
    console.error('Error fetching artist:', error);
    return res.status(500).json({
      success: false,
      payload: error.message // Return error message
    });
  }
});
  
  // Endpoint to create a new <resource_twos>
  app.post("/artists/", async function (req, res) {
    const add = req.body
    const artist= await createArtist(add);
    try {
      const artists = await getArtistsById(id);
      if (!artists) {
        return res.status(400).json({
          success: false,
          payload: "Error, try again" 
        });
      }
      return res.status(200).json({
        success: true,
        payload: artists
      });
    } catch (error) {
      console.error('Error fetching artist:', error);
      return res.status(500).json({
        success: false,
        payload: error.message // Return error message
      });
    }
  });
    
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/artists/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/artists/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});