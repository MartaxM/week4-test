if (document.readyState !== "loading") {
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document ready after waiting!");
        initializeCode();
    });
}

function initializeCode() {
    const searchRecipeButton = document.getElementById("search-button");

    searchRecipeButton.addEventListener("click", function () {
        const InputUser = document.getElementById("search-name");
        let recipe_path = "http://localhost:3000/recipe/" + InputUser.value;
        //console.log(user_path);
        fetch(recipe_path, { method: "get" })
            .then((response) => response.json())
            .then((recipe) => {
                console.log(recipe);
                showRecipe(recipe);
            });
    });
}

function showRecipe(recipe) {
    const recipeDiv = document.getElementById("recipe-div");
    recipeDiv.replaceChildren();
    let name = document.createElement("h3");
    name.innerText = recipe.name;
    recipeDiv.appendChild(name);
    for (let i = 0; i < recipe.instructions.length; i++) {
        let ins = document.createElement("p");
        ins.innerText = recipe.instructions[i];
        recipeDiv.appendChild(ins);
    }

    for (let i = 0; i < recipe.ingredients.length; i++) {
        let ingre = document.createElement("p");
        ingre.innerText = recipe.ingredients[i];
        recipeDiv.appendChild(ingre);
    }
}