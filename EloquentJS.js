export class EloquentJS {

    /*
     Json File Object to use in queries.
     */
    JSONFile = null;

    /*
     Result of current query.
     */
    QueryResult = null;

    /*
     Search in JSONFile to find specific value.
     */
    query(key, value) {
        let result = this.JSONFile.filter((item) => {
            return item[key] == value;
        });

        return result[0];
    }

    /*
     Return all keys on JSONFile.
     */
    all() {
        this.QueryResult = this.JSONFile;
        return this;
    }

    /*
     Another alias for query method.
     */
    where(key, value) {
        this.QueryResult = this.query(key, value);
        return this;
    }

	/*
	Apply another where to current query
	*/
    andWhere(key, value) {
        let andWhere = this.QueryResult.filter((item) => {
            return item[key] = value;
        });
        this.QueryResult = andWhere[0];
        return this;
    }

    /*
     Pick a part of query result.
     */
    pluck(field = 'id') {
        this.QueryResult = this.plunkFromQueryResult(field);
        return this;
    }

    plunkFromQueryResult(field) {

        if (!Array.isArray(this.QueryResult)) {
            return this.QueryResult[field];
        }

        let where = [];
        this.QueryResult.filter((item) => {
            return where.push(item[field]);
        });

        return where;
    }

    /*
     execute chained query.
     */
    get() {
        return this.QueryResult;
    }
}