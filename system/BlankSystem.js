// Import the other JS script files our project uses.

// Sheets
import PlayerSheet from "./sheets/PlayerSheet.js"; 

// Create a function that will run on startup. (Blank for now).
Hooks.once("init"", function() {
   // You can display something into chat
   console.log("BlankSystem | Message of the Day!");
   
   // Deregister the default sheet so users can't choose it
   Actors.unregisterSheet("core", ActorSheet);
   
   // Register the sheets we will use, and pick our default one.
   Actors.registerSheet("BlankSystem", PlayerSheet, {makeDefault: true});
});