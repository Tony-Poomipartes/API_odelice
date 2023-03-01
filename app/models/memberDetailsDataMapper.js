const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');

/** Class representing a member_details data mapper. */
class memberDetailsDataMapper extends CoreDataMapper {
    static tableName = 'member';

    /**
     * create a member_details data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('member_details data mapper created');
    }

    /**
    * fetch an entry according to its id
    *
    * @param {number} id - id of the entry
    * @returns an entry
    */
    async findByPk(id) {
        debug(`${this.constructor.name} findByPk(${id})`);
        const preparedQuery = {
            text: `
                SELECT
                    "member"."id",
                    "member"."pseudo",
                    "member"."firstname",
                    "member"."lastname",
                    "member"."email",
                    "member"."picture",
                    (
                        SELECT json_agg(json_build_object('id', "recipe"."id", 'name', "recipe"."name", 'description', "recipe"."description"))
                        FROM "recipe"
                        WHERE "recipe"."member_id" = "member"."id"
                    )AS "recipes",
                    (
                        SELECT
                            json_agg(json_build_object('pseudo', (SELECT "pseudo" FROM "member" WHERE "member"."id" = "comment"."member_id"), 'name', "recipe"."name", 'content', "comment"."content", 'rate', "comment"."rate")) 
                        FROM "comment"
                        JOIN "recipe" ON "member"."id" = "recipe"."member_id"		
                    )AS "comments"                
                FROM "${this.constructor.tableName}"
                WHERE "member"."id" = $1
                GROUP BY
                    "member"."id",
                    "member"."pseudo",
                    "member"."firstname",
                    "member"."lastname",
                    "member"."email",
                    "member"."picture"
                ORDER BY "member"."id";
            `,
            values: [id],
        };
        const results = await client.query(preparedQuery);
        return results.rows[0];
    }
}

module.exports = new memberDetailsDataMapper();