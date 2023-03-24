require('dotenv').config();
const bcrypt = require('bcrypt');
const { Client } = require('pg');

const ingredients = require('./ingredients.json');
const members = require('./members.json');
const recipes = require('./recipes.json');
const comments = require('./comments.json');
const recipe_has_ingredient = require('./recipe_has_ingredient.json');

async function importData(client) {

  //*------------------ingredients-------------------
  const ingredientsPromises = [];
  ingredients.forEach((ingredient) => {

    const { name, type } = ingredient;

    const capitalizedTerms = {
        name: (name).replace(/^\w/, (name) => name.toUpperCase()),
        type: (type).replace(/^\w/, (type) => type.toUpperCase())
    };
    ingredient = capitalizedTerms;

    const query = client.query(
      `
          INSERT INTO "ingredient"
          ("name","type")
          VALUES
          ($1, $2)
          RETURNING *
      `,
      [ingredient.name, ingredient.type],
    );
    ingredientsPromises.push(query);
  });
  await Promise.all(ingredientsPromises);
  //*---------------------members-------------------------
  const membersPromises = [];
  const saltRounds = 10;
  
  async function hashPassword(member) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(member.password, salt);
    member.password = hashedPassword;
  }
  
  for (const member of members) {
    await hashPassword(member);
  
    const preparedQuery = {
      text: `
      INSERT INTO "member"
      ("lastname", "firstname", "email", "pseudo","picture","password")
      VALUES
      ($1, $2, $3, $4, $5, $6)
    `,
      values: [
        member.lastname,
        member.firstname,
        member.email,
        member.pseudo,
        member.picture,
        member.password
      ],
    };
    membersPromises.push(client.query(preparedQuery));
  }
  await Promise.all(membersPromises);
  //*-------------------recipes--------------------
  const recipesPromises = [];
  recipes.forEach((recipe) => {
    const preparedQuery = {
      text: `
        INSERT INTO "recipe"
        ("name", "description", "steps", "picture","member_id")
        VALUES
        ($1, $2, $3, $4, $5)
      `,
      values: [
        recipe.name,
        recipe.description,
        recipe.steps,
        recipe.picture,
        recipe.member_id
      ],
    };
    recipesPromises.push(client.query(preparedQuery));
  });

  await Promise.all(recipesPromises);
  //*-------------------recipe_has_ingredient--------------------
  const recipe_has_ingredientPromises = [];
  recipe_has_ingredient.forEach((recipe) => {
    const preparedQuery = {
      text: `
      INSERT INTO "recipe_has_ingredient"
      ("quantity", "units", "recipe_id", "ingredient_id")
      VALUES
      ($1, $2, $3, $4)
    `,
      values: [
        recipe.quantity,
        recipe.units,
        recipe.recipe_id,
        recipe.ingredient_id
      ],
    };
    recipe_has_ingredientPromises.push(client.query(preparedQuery));
  });
  await Promise.all(recipe_has_ingredientPromises);
  //*---------------------comments-------------------------
  const commentsPromises = [];
  comments.forEach((comment) => {
    const preparedQuery = {
      text: `
      INSERT INTO "comment"
      ("content", "rate","recipe_id","member_id")
      VALUES
      ($1, $2, $3, $4)
    `,
      values: [
        comment.content,
        comment.rate,
        comment.recipe_id,
        comment.member_id
      ],
    };
    commentsPromises.push(client.query(preparedQuery));
  });
  await Promise.all(commentsPromises);
}

(async () => {
  const client = new Client({ 
    // database: process.env.PGDATABASE
    // remplacer process.env.PGDATABASE par les infos ci-dessous
    user:'postgres',
    host:'***********',
    database:'******',
    password:'**********',
    port: ****
  });
  await client.connect();
  await importData(client);
  client.end();
})();
