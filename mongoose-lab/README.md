
## Mongoose Lab


### Instructions

#### 1. Project Setup

1. Create a new Node.js project:

   ```bash
   npm init -y
   ```
2. Install mongoose as a dependancy:

   ```bash
   npm install mongoose
   ```

#### 2. Database Connection
* Create a file called `app.js`

* In a file named `app.js`, connect to a local MongoDB database named `recipesDB`.
* Use `mongoose.connect()` and log:

  * `"Connected to database!"` on success.
  * `"Connection failed."` on error.

#### 3. Model Definition (in `models/Recipe.js`)

Create a model folder and create a Recipe.js file inside. create the model with the following fields:
| Field        | Type      | Constraints                                            |
|--------------|-----------|--------------------------------------------------------|
| name         | String    | Required                                               |
| ingredients  | [String]  | Must be an array of strings                            |
| instructions | String    | Optional                                               |
| prepTime     | Number    | Optional                                               |
| difficulty   | String    | Must be one of 'Easy', 'Medium', 'Hard'; default: 'Easy' |

* Use the Mongoose Schema.
* Export the model.

---

### 4. Functionality (in `app.js`)

Build the following **functions** that interact with the database in your app.js

#### `createRecipe(newRecipe)`

* Takes in a recipe object.
* Creates the recipe in the database.
* If successful, `console.log()` the created recipe.
* If unsuccessful, `console.log("Failed to create recipe.")`.
* Test your function with the following object:
   ```javascript
   const newRecipe = {
    name: "Um Ali",
    ingredients: ["Puff Pastry","Milk"],
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
   }
   ```


#### `getAllRecipes()`

* Retrieves all recipes from the database.
* `console.log()` all the recipes.
* BONUS: `console.log()` the recipes in the following format: `{name} is an {difficulty} recipe and takes {prepTime} minutes to prepare`


#### `updateRecipe(recipeId, newRecipeData)`

* Takes in a recipe ID and an object of updated data.
* Updates the recipe in the DB.
* Use `{ new: true }` to return the updated document.
* Log the updated recipe if successful.

#### `deleteRecipe(recipeId)`

* Deletes the recipe with the given ID.
* If successful, `console.log("Recipe successfully deleted.")`.

#### `getRecipeById(id)`

* Finds a recipe by its ID.
* If found, log the recipe.
* If not found, `console.log("No recipe with this ID exists.")`.

---

### BONUS: Refactor for Reusability

1. Move all the functions into a separate file called `recipeUtils.js`.
2. Export the functions using module.exports in an object from `recipeUtils.js`.
3. Import and use them in `app.js`.

