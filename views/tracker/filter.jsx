const React = require("react");
const moment = require("moment");

class Filter extends React.Component {
    render() {
        let month = this.props.month;
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
                <td>{index + 1}</td>
                <td>{date}</td>
                <td>{info.type}</td>
                <td>{info.amount}</td>
                <td>{info.description}</td>
            </tr>
        })

        info.forEach(infos => {
            if (infos.type === "expense") {
                totalExpense += infos.amount
            } else if (infos.type === "income") {
                totalIncome += infos.amount
            }
        })

        return (
            <div>
                <div>
                    {month}
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
                    <div>Total Income: ${totalIncome}</div>
                    <div>Total Expense: ${totalExpense}</div>
                </div>

                <form method="GET" action={`/tracker/${info.username}`}>
                    <input type="submit" value="Back" />
                </form>
            </div>
        )
    }
}

module.exports = Filter;