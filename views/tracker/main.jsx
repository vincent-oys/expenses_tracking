const React = require("react");

class Main extends React.Component {

    render() {
        let user = this.props.username;
        let info = this.props.rows;

        let expenseInfo = info.map((info, index) => {
            info.tempId = index + 1;
            // info.currentUser = user;
            return info
        })

        let show = expenseInfo.map((info, index) => {
            return <tr key={`${index + 1}`}>
                <td><a href={`http://localhost:3000/tracker/${user}/${info.tempId}`}>{index + 1}</a> </td>
                <td><a href={`http://localhost:3000/tracker/${user}/${info.tempId}`}>{info.date}</a></td>
                <td><a href={`http://localhost:3000/tracker/${user}/${info.tempId}`}>{info.income}</a></td>
                <td><a href={`http://localhost:3000/tracker/${user}/${info.tempId}`}>{info.expense}</a></td>
                <td><a href={`http://localhost:3000/tracker/${user}/${info.tempId}`}>{info.description}</a></td>
            </tr>
        })

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                </head>
                <body>
                    <div>
                        <h1>Expense Tracker</h1>
                        <h2>Welcome {`${user}`}!</h2>
                    </div>

                    <div>
                        <div>Balance</div>
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
                    </div>
                </body>
            </html >
        );
    }
}

module.exports = Main;