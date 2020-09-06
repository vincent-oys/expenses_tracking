const React = require("react");

class Main extends React.Component {

    render() {
        let user = this.props.username;
        let info = this.props.rows;

        let expenseInfo = info.map((info, index) => {
            info["tempId"] = index + 1;
            return info
        })

        let show = expenseInfo.map((info, index) => {
            return <tr key={`${index + 1}`}>
                <td>{index + 1}</td>
                <td>{info.date}</td>
                <td>{info.income}</td>
                <td>{info.expense}</td>
                <td>{info.description}</td>
            </tr>
        })

        return (
            <html>
                <body>
                    <div>
                        <h1>Expense Tracker</h1>
                        <h2>Welcome {`${user}`}!</h2>
                    </div>

                    <div>
                        <div>Balance</div>
                    </div>

                    <div>


                    </div>

                    <div>
                        <div>Expenses Detials</div>
                        <table id="showExpense">
                            <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Income</th>
                                <th>Expense</th>
                                <th>Description</th>
                            </tr>
                            {show}

                        </table>
                    </div>

                    <div>
                        <h3>Add Expenses/Income</h3>
                        <form method="POST" action={`/tracker/${user}`}>
                            Income: <input type="text" name="income" /><br />
                            Expenses: <input type="text" name="expense" /><br />
                            Date: <input type="date" name="date" required /><br />
                            Description: <input type="text" name="description" /><br />
                            <input type="submit" value="Submit" />
                        </form>

                        {/* <h3>Edit Expenses/Income</h3>
                        <form method="POST" action={`/tracker/${id}?_method=put`}>
                            Income: <input type="text" name="income" /><br />
                            Expenses: <input type="text" name="expense" /><br />
                            Date: <input type="date" name="date" required /><br />
                            Description: <input type="text" name="description" /><br />
                            <input type="submit" value="Submit" />
                        </form>

                        <h3>Delete Expenses/Income</h3>
                        <form method="POST" action={`/recipes/${id}?_method=delete`}>
                            Income: <input type="text" name="income" /><br />
                            Expenses: <input type="text" name="expense" /><br />
                            Date: <input type="date" name="date" required /><br />
                            Description: <input type="text" name="description" /><br />
                            <input type="submit" value="Submit" />
                        </form> */}
                    </div>
                </body>
            </html >
        );
    }
}

module.exports = Main;