module.exports = (dbPoolInstance) => {

    let showAll = (callback) => {
        let query = `SELECT * FROM expenses`

        dbPoolInstance.query(query, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error in showAll model", queryErr.message);
            } else {
                callback(null, queryResult)
            }
        })
    }

    let addExpense = (values, callback) => {
        let query = `INSERT INTO expenses (users_id, date, income, expense, description, uuid) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`

        dbPoolInstance.query(query, values, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error in addExpense model", queryErr.message);
            } else {
                callback(null, queryResult)
            }
        })
    }

    let editExpense = (values, callback) => {
        let query = `UPDATE expenses SET date = $1, income = $2, expense = $3, description = $4 RETURNING *`

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