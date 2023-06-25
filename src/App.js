import React, { useState } from 'react';
import Papa from 'papaparse';
import CSVExport from './components/CSVExport';
import CSVImport from './components/CSVImport';

const App = () => {

  // const [data, setData] = useState([]);

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     header: true,
  //     complete: (results) => {
  //       setData(results.data);
  //     }
  //   })
  // }

  return (<>

    <CSVExport />

    <CSVImport />
  </>
  )
}

export default App
