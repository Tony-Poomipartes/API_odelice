require('dotenv').config();

const { Client } = require('pg');

const categories = require('./categories.json');
const posts = require('./posts.json');

async function importData(client) {
  const categoriesPromises = [];
  categories.forEach((category) => {
    const query = client.query(
      `
          INSERT INTO "category"
          ("label", "route")
          VALUES
          ($1, $2)
          RETURNING *
      `,
      [category.label, category.route],
    );
    categoriesPromises.push(query);
  });
  const results = await Promise.all(categoriesPromises);
  const categoryRows = results.map((result) => result.rows[0]);

  const postsPromises = [];
  posts.forEach((post) => {
    const postCategory = categoryRows.find((category) => category.label === post.category);
    const preparedQuery = {
      text: `
        INSERT INTO "post"
        ("slug", "title", "excerpt", "content", "category_id")
        VALUES
        ($1, $2, $3, $4, $5)
      `,
      values: [
        post.slug,
        post.title,
        post.excerpt,
        post.content,
        postCategory.id,
      ],
    };
    postsPromises.push(client.query(preparedQuery));
  });
  await Promise.all(postsPromises);
}

// https://developer.mozilla.org/fr/docs/Glossary/IIFE
(async () => {
  const client = new Client();
  await client.connect();
  await importData(client);
  client.end();
  /* eslint-disable-next-line */
  console.log('Seeding terminé');
})();
