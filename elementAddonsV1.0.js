// Register your custom element directly into the game's element object
elements.magic_slime = {
    color: "#c21d80",         // The hex color code of your element
    behavior: behaviors.LIQUID, // How it moves (POWDER, LIQUID, GAS, SOLID, WALL, etc.)
    category: "liquids",      // Which menu tab it appears in
    viscosity: 50,            // How slow or fast it flows
    density: 1200,            // Used to determine if it sinks or floats in other liquids
    state: "liquid",          // The starting state of matter
    
    // Define reactions when it touches other elements
    reactions: {
        "water": { elem1: null, elem2: "acid" }, // Turns into acid when touching water
        "fire": { elem1: "steam", elem2: null }  // Vaporizes into steam when heated
    }
};
