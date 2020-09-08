const React = require("react");
const moment = require("moment");

class Single extends React.Component {
    render() {
        let index = this.props.index;
        let info = this.props.rows[index];

        let date = moment(info.date).format().substr(0, 10);

        return (
            <div>
                <div>
                    <table className="showExpense">
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>{date}</td>
                            <td>{info.type}</td>
                            <td>{info.amount}</td>
                            <td>{info.description}</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <form method="POST" action={`/tracker/${info.username}/${index + 1}?_method=PUT`}>
                        <label>Type:</label>
                        <select name="type" >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                        <br />
                        Amount: <input type="text" name="amount" required /><br />
                        Date: <input type="date" name="date" defaultValue={`${date}`} required /><br />
                        Description: <input type="text" name="description" /><br />
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