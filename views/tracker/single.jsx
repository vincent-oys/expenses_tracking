const React = require("react");

class Single extends React.Component {
    render() {
        let index = this.props.index;
        let info = this.props.rows[index];
        console.log(info)

        return (
            <div>
                <div>
                    <table id="showExpense">
                        <tr>
                            <th>Date</th>
                            <th>Income</th>
                            <th>Expense</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>{info.date}</td>
                            <td>{info.income}</td>
                            <td>{info.expense}</td>
                            <td>{info.description}</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <form method="POST" action={`/tracker/${info.username}/${index + 1}?_method=PUT`}>
                        Income: <input type="text" name="income" value={`${info.income}`} /><br />
                        Expenses: <input type="text" name="expense" value={`${info.expense}`} /><br />
                        Date: <input type="date" name="date" required /><br />
                        Description: <input type="text" name="description" value={`${info.description}`} /><br />
                        <input type="hidden" name="uuid" value={`${info.uuid}`} />
                        <input type="submit" value="Edit" />
                    </form>
                    <form method="POST" action={`/tracker/${info.username}/${index + 1}?_method=DELETE`}>
                        <input type="hidden" name="uuid" value={`${info.uuid}`} />
                        <input type="submit" value="Delete" />
                    </form>
                    <form method="GET" action={`/tracker/${info.username}`}>
                        <input type="submit" value="Back" />
                    </form>
                </div>

            </div>
        )
    }
}

module.exports = Single;