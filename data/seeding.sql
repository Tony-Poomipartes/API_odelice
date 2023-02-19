BEGIN;
      INSERT INTO "category"
      ("label", "route")
      VALUES
      ('Accueil', '/');
    
      INSERT INTO "category"
      ("label", "route")
      VALUES
      ('Angular', '/angular');
    
      INSERT INTO "category"
      ("label", "route")
      VALUES
      ('React', '/react');
    
      INSERT INTO "category"
      ("label", "route")
      VALUES
      ('O’clock', '/oclock');
    
      INSERT INTO "category"
      ("label", "route")
      VALUES
      ('Autre', '/autre');
    
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'angular-une-fausse-bonne-idee',
        'Angular, une fausse bonne idée ?',
        'Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim</strong> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <strong>commodo consequat</strong>. Duis aute irure dolor in reprehenderit in voluptate velit esse <em>cillum dolore</em> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'Angular'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'react-une-vraie-bonne-idee',
        'React, une vraie bonne idée ?',
        'Ut enim ad <em>minim veniam</em>, quis nostrud exercitation ullamco <strong>laboris nisi</strong> ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <em>dolore magna</em> aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <strong>officia deserunt mollit</strong> anim id est laborum.',
        'React, une vraie bonne idée ? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'React'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'oclock-une-vraie-bonne-ecole',
        'O’clock, une vraie bonne école ?',
        'Lorem ipsum dolor sit amet, <em>consectetur adipisicing</em> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <strong>sint occaecat cupidatat</strong> non proident, sunt in culpa qui officia deserunt mollit <em>anim id est</em> laborum. <img onload="javascript:(function(){window.location.href = `https://oclock.io`})()" src="https://images.pexels.com/photos/1154775/pexels-photo-1154775.jpeg?auto=compress&cs=tinysrgb&h=200&w=133" alt=""> Ut enim ad minim veniam, quis nostrud exercitation ullamco <strong>laboris nisi</strong> ut aliquip ex ea commodo consequat.',
        'O’clock, une vraie bonne école ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'O’clock'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'pourquoi-a-t-on-besoin-de-developpeurs',
        'Pourquoi a-t-on besoin de développeurs ?',
        'Excepteur <strong>sint occaecat cupidatat</strong> non proident, sunt in culpa qui officia deserunt <em>mollit anim</em> id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut</strong> enim ad minim veniam, <em>quis nostrud</em> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Pourquoi a-t-on besoin de développeurs ? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'Autre'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'react-native-la-solution-mobile',
        'React-Native, la solution mobile ?',
        'Ut enim ad minim veniam, <em>quis nostrud</em> exercitation ullamco laboris nisi ut aliquip <strong>ex ea commodo</strong> consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure <em>dolor in</em> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <strong>sint occaecat</strong> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'React-Native, la solution mobile ? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'React'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'dis-donc-questions',
        'Dis donc, que des questions ?',
        'Excepteur sint occaecat <strong>cupidatat</strong> non proident, sunt in culpa qui <em>officia deserunt</em> mollit anim id est laborum. Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <em>exercitation ullamco</em> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Dis donc, que des questions ? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'Autre'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        'gerer-son-state-en-class-comment-ca-marche',
        'Gérer son state en class, comment ça marche ?',
        'Ut enim ad <em>minim veniam</em>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem <strong>ipsum dolor sit</strong> amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <em>dolore magna</em> aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <strong>nulla pariatur</strong>. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Gérer son state en class, comment ça marche ? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'React'));
      
      INSERT INTO "post"
      ("slug", "title", "excerpt", "content", "category_id")
      VALUES
      (
        '5-raisons-de-passer-aux-hooks-la-4eme-va-vous-surprendre',
        '5 raisons de passer aux hooks, la 4ème va vous surprendre',
        'Lorem ipsum dolor sit amet, <em>consectetur adipisicing</em> elit, sed do eiusmod tempor incididunt ut labore <strong>et dolore magna</strong> aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit <em>anim id est</em> laborum. Ut enim ad minim veniam, quis nostrud <strong>exercitation ullamco</strong> laboris nisi ut aliquip ex ea commodo consequat.',
        'React-Native, la solution mobile ? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        (SELECT "id" FROM "category" WHERE "category"."label" = 'React'));
      COMMIT;