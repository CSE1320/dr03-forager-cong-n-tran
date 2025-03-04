import React from "react";


const FavoritesButton = ({isFavorite, setIsFavorite}) => {
    return (
        <button 
            className="bg-gray-200 p-2 rounded-lg"
            onClick={() => setIsFavorite(!isFavorite)}
        >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    );
}
export default FavoritesButton;