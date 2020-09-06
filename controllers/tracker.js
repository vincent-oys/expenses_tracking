const { v4: uuidv4 } = require('uuid');

module.exports = (db) => {

    let main = (req, res) => {
        // res.render("tracker/main")

        db.tracker.showAll((err, result) => {
            if (err) {
                console.log("-- Error in main controller", err.message);
            } else {
                res.render("tracker/main", result)
            }
        })
    }

    let postExpense = (req, res) => {
        let returnInfo = req.body;
        // let user = req.params.user;
        let date = returnInfo.date;
        let income = returnInfo.income || 0;
        let expense = returnInfo.expense || 0;
        let description = returnInfo.description || "-";
        let uuid = uuidv4()
        let values = [1, date, income, expense, description, uuid];

        db.tracker.addExpense(values, (err, result) => {
            if (err) {
                console.log("-- Error in postExpense controller", err.message);
            } else {
                console.log(result)
                res.send("expenses added")
            }
        })
    }

    let putExpense = (req, res) => {
        // let id = req.params.id;
        let date = returnInfo.date;
        let income = returnInfo.income;
        let expense = returnInfo.expense;
        let description = returnInfo.description;
        let values = [date, income, expense, description];

        db.tracker.editExpense(values, (err, result) => {
            if (err) {
                console.log("-- Error in deleteExpense controller", err.message)
            } else {
                if (result === true) {
                    res.redirect("/tracker")
                }
            }
        })
    }

    let deleteExpense = (req, res) => {
        let values = [req.params.id];

        db.tracker.removeExpense(values, (err, result) => {
            if (err) {
                console.log("-- Error in deleteExpense controller", err.message)
            } else {
                if (result === true) {
                    res.redirect("/tracker")
                }
            }
        })

    }


    return {
        main,
        postExpense,
        putExpense,
        deleteExpense
    }

}