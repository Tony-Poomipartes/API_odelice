require('dotenv').config();
​
const { Client } = require('pg');
​
const ingredients = require('./ingredients.json');
const members = require('./members.json');
const recipes = require('./recipes.json');
​
// async function importData(client) {
//   const categoriesPromises = [];
//   categories.forEach((category) => {
//     const query = client.query(
//       `
//           INSERT INTO "category"
//           ("label", "route")
//           VALUES
//           ($1, $2)
//           RETURNING *
//       `,
//       [category.label, category.route],
//     );
//     categoriesPromises.push(query);
//   });
async function importData(client) {
  const ingredientsPromises = [];
  ingredients.forEach((ingredient) => {
    const query = client.query(
      `
          INSERT INTO "ingredient"
          ("name", "type")
          VALUES
          ($1, $2)
          RETURNING *
      `,
      [ingredient.name, ingredient.type],
    );
    ingredientsPromises.push(query);
  });
  const results = await Promise.all(ingredientsPromises);
  const categoryRows = results.map((result) => result.rows[0]);
​
  const recipesPromises = [];
  recipes.forEach((recipe) => {
    const preparedQuery = {
      text: `
        INSERT INTO "recipe"
        ("name", "description", "steps", "picture", "category_id")
        VALUES
        ($1, $2, $3, $4, $5)
      `,
      values: [
        recipe.name,
        recipe.description,
        recipe.steps,
        recipe.picture,
        recipeCategory.id,
      ],
    };
    recipesPromises.push(client.query(preparedQuery));
  });
  await Promise.all(recipesPromises);
}
​
(async () => {
  const client = new Client();
  await client.connect();
  await importData(client);
  client.end();
})();
