// Give your mod an internal name registry
mods.magic_slime_addon = {
    name: "Magic Slime Addon",
    author: "Thatoneguy6079",
    description: "Adds a custom magic slime element!",
    version: "1.0",
    
    // This function forces Sandboxels to wait until the game is ready before injecting
    run: function() {
        elements.magic_slime = {
            color: "#c21d80",
            behavior: behaviors.LIQUID,
            category: "liquids",
            viscosity: 50,
            density: 1200,
            state: "liquid",
            reactions: {
                "water": { elem1: null, elem2: "acid" },
                "fire": { elem1: "steam", elem2: null }
            }
        };
        
        // This registers your modded element so the UI builds it into the search box and tabs
        createElement(elements.magic_slime, "magic_slime");
    }
};
