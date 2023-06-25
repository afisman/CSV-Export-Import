import React, { useState, useEffect } from 'react';
import Data from './../data.csv';

import Papa from 'papaparse';

const CSVImport = () => {

    const [data, setData] = useState([]);

    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     Papa.parse(file, {
    //         header: true,
    //         complete: (results) => {
    //             setData(results.data);
    //         }
    //     })
    // }

    const fetchData = async () => {
        const response = await fetch(Data);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csvData = decoder.decode(result.value);
        const parsedData = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true
        }).data;
        setData(parsedData);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (<>

        {/* <input type='file' accept='.csv' onChange={handleFileUpload} /> */}

        {
            data.length && (
                <table className='table'>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.Name}</td>
                                <td>{row.Age}</td>
                                <td>{row.Country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    </>
    )
}

export default CSVImport