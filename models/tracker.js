module.exports = (dbPoolInstance) => {

    let showAll = (values, callback) => {
        let query = `SELECT * FROM expenses INNER JOIN users ON users.id = expenses.users_id WHERE users.username = $1`

        dbPoolInstance.query(query, values, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error in showAll model", queryErr.message);
            } else {
                callback(null, queryResult)
            }
        })
    }

    let addExpense = (values, user, callback) => {

        let query = `SELECT id FROM users WHERE username = $1`

        dbPoolInstance.query(query, user, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error at addExpense model first layer", queryErr.message)
            } else {
                let userId = queryResult.rows[0].id;
                values.unshift(userId);

                let queryText = `INSERT INTO expenses (users_id, date, income, expense, description, uuid) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`

                dbPoolInstance.query(queryText, values, (queryErr, queryResult) => {
                    if (queryErr) {
                        console.log("-- Error in addExpense model", queryErr.message);
                    } else {
                        callback(null, true)
                    }
                })
            }
        })


    }

    let editExpense = (values, callback) => {
        let query = `UPDATE expenses SET date = $1, income = $2, expense = $3, description = $4 WHERE id = RETURNING *`

        dbPoolInstance.query(query, values, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error in editExpense model", queryErr.message);
            } else {
                callback(null, true)
            }
        })
    }

    let removeExpense = (values, callback) => {
        let query = `DELETE FROM expenses WHERE id = $1`

        dbPoolInstance.query(query, values, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error in removeExpense model", queryErr.message);
            } else {
                callback(null, true)
            }
        })
    }

    return {
        showAll,
        addExpense,
        editExpense,
        removeExpense
    }
}