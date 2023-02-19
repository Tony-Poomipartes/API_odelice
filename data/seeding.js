const fs = require('fs');
const path = require('path');
const categories = require('./categories.json');
const posts = require('./posts.json');

let transaction = 'BEGIN;';

async function generateSQL() {
  categories.forEach((category) => {
    transaction += `
      INSERT INTO "category"
      ("label", "route")
      VALUES
      ('${category.label}', '${category.route}');
    `;
  });
  posts.forEach((post) => {
    transaction += `
      INSERT INTO "post"
        ("slug", "title", "excerpt", "content", "category_id")
      VALUES
        (
          '${post.slug}',
          '${post.title}',
          '${post.excerpt}',
          '${post.content}',
          (SELECT "id" FROM "category" WHERE "category"."label" = '${post.category}')
        );
      `;
  });
  transaction += 'COMMIT;';
  fs.writeFileSync(path.join(__dirname, 'seeding.sql'), transaction);
}

generateSQL();
/* eslint-disable-next-line */
console.log('fichier seeding.sql généré');
