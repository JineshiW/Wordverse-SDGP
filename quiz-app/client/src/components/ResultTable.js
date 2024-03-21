import React, { useEffect, useState } from 'react'; // Importing React and its useEffect, useState hooks
import { getServerData } from '../helper/helper'; // Importing getServerData function from '../helper/helper'

export default function ResultTable() { // Defining a functional component named ResultTable
  const [data, setData] = useState([]); // Declaring state variable 'data' using useState hook, initialized to an empty array

  useEffect(() => { // Using useEffect hook to execute code after render
    // Fetching server data using the getServerData function
    getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
      setData(res); // Updating the 'data' state with the fetched data
    });
  }, []); // Dependency array is empty, so the effect will run only once after the initial render

  return (
    <div> {/* Render a div */}
      {/* Creating a table to store results */}
      <table>

        {/* Table heading */}
        <thead className='table-header'> {/* Render the table header with className 'table-header' */}
            <tr className='table-row'> {/* Render a table row with className 'table-row' */}
                <td>Name</td> {/* Render a table data cell with the label 'Name' */}
                <td>Attempts</td> {/* Render a table data cell with the label 'Attempts' */}
                <td>Earned Points</td> {/* Render a table data cell with the label 'Earned Points' */}
                <td>Result</td> {/* Render a table data cell with the label 'Result' */}
            </tr>
        </thead>

        {/* Table body */}
        <tbody> {/* Render the table body */}
            { !data ?? <div>No Data Found</div>} {/* Render a message if data is falsy */}
            {
              data.map((v,i) =>( // Map through the data array and render each item as a table row
                  <tr className='table-body' key={i}> {/* Render a table row with className 'table-body' and a unique key */}
                      <td>{v?.username || ""}</td> {/* Render the username or an empty string if it's falsy */}
                      <td>{v?.attempts || 0}</td> {/* Render the attempts or 0 if it's falsy */}
                      <td>{v?.points || 0}</td> {/* Render the points or 0 if it's falsy */}
                      <td>{v?.achived || ""}</td> {/* Render the achived status or an empty string if it's falsy */}
                  </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}
