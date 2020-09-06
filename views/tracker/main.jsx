const React = require("react");

class Main extends React.Component {

    documemt.querySelector("")

    render() {
        let expenseInfo = this.props.rows;
        console.log(expenseInfo)

        let show = expenseInfo.map((info, index) => {
            // return <form method="POST" action={`/tracker/${id}?_method=${method}`}>
            return <form method="POST">
                <tr>
                    <td>{index + 1} <input type="hidden" name="id" value={`${info.uuid}`} /></td>
                    <td>{info.date} <input type="hidden" name="date" value={`${info.date}`} /></td>
                    <td>{info.income} <input type="hidden" name="income" value={`${info.income}`} /></td>
                    <td>{info.expense} <input type="hidden" name="expense" value={`${info.expense}`} /></td>
                    <td>{info.description} <input type="hidden" name="description" value={`${info.description}`} /></td>
                    <td><input type="submit" value="Edit" className="edit" /></td>
                    <td><input type="submit" value="Delete" className="delete" /></td>
                </tr>
            </form >
        })

        return (
            <html>
                <body>
                    <div>
                        <h1>Welcome to Expense Tracker</h1>
                    </div>

                    <div>
                        <div>Daily</div>
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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {show}

                        </table>
                    </div>

                    <div>
                        <h3>Add Expenses/Income</h3>
                        <form method="POST" action="/tracker">
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