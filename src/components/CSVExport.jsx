import React, { useState } from 'react'
import { CSVLink } from 'react-csv'

const CSVExport = () => {
    const [transactionData, setTransactionData] = useState([])

    const data = [
        { name: 'A1', age: 30, country: 'Gabon', },
        { name: 'A2', age: 31, country: 'Cape Vert', },
        { name: 'A3', age: 22, country: 'Colombia', },
        { name: 'A4', age: 72, country: 'Cambodia', },
        { name: 'A5', age: 26, country: 'Timor', }
    ];

    const headers = [
        {
            label: 'Name', key: 'name'
        },
        {
            label: 'Age', key: 'age'
        },
        {
            label: 'Country', key: 'country'
        },
    ];

    const csvLink = {
        headers: headers,
        data: data,
        filename: 'file.csv'

    }
    console.log(csvLink)
    return (
        <div>
            <CSVLink {...csvLink}>Export to CSV</CSVLink>
        </div>
    )
}

export default CSVExport