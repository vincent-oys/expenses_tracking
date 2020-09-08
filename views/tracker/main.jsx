const React = require("react");
const moment = require("moment");

class Main extends React.Component {

    render() {
        let user = this.props.username;
        let info = this.props.rows;
        let totalExpense = 0;
        let totalIncome = 0;

        let expenseInfo = info.map((info, index) => {
            info.tempId = index + 1;
            return info
        })

        let show = expenseInfo.map((info, index) => {
            let date = moment(info.date).format().substr(0, 10);

            return <tr key={`${index + 1}`}>
                <td><a href={`/tracker/${user}/${info.tempId}`}>{index + 1}</a> </td>
                <td><a href={`/tracker/${user}/${info.tempId}`}>{date}</a></td>
                <td><a href={`/tracker/${user}/${info.tempId}`}>{info.type}</a></td>
                <td><a href={`/tracker/${user}/${info.tempId}`}>{info.amount}</a></td>
                <td><a href={`/tracker/${user}/${info.tempId}`}>{info.description}</a></td>
            </tr>
        })

        let today = moment(new Date()).format().substr(0, 10);

        info.forEach(infos => {
            if (infos.type === "expense") {
                totalExpense += infos.amount
            } else if (infos.type === "income") {
                totalIncome += infos.amount
            }
        })


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                </head>
                <body>
                    <div>
                        <div>
                            <h1>Expense Tracker</h1>
                            <h2>Welcome {`${user}`}!</h2>
                        </div>
                        <div>
                            <form method="GET" action={`/logout`}>
                                <input type="submit" value="Log Out" />
                            </form>
                        </div>
                    </div>

                    <div>
                        <div>Balance: ${totalIncome - totalExpense}</div>
                    </div>

                    <div>
                        <div>Filter Expenses by Month</div>
                        <form method="post" action={`/tracker/filter/${user}`} >
                            <label>Month:</label>
                            <select name="month" >
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                            <input type="submit" value="Filter" />
                        </form>
                    </div>

                    <div>
                        <table className="showExpense">
                            <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                            {show}
                        </table>
                    </div>

                    <div>
                        <h3>Add Expenses/Income</h3>
                        <form method="POST" action={`/tracker/${user}`}>
                            <label>Type:</label>
                            <select name="type" >
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>
                            <br />
                            Amount: <input type="text" name="amount" required /><br />
                            Date: <input type="date" name="date" defaultValue={`${today}`} required /><br />
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