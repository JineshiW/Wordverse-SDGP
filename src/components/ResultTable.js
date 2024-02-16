import React from 'react'

export default function ResultTable() {
  return (
    <div>
      {/* creating a table to store results */}
      <table>

        {/* table heading */}
        <thead className='table-header'>
            <tr className='table-row'>
                <td>Name</td>
                <td>Attempts</td>
                <td>Earned Points</td>
                <td>Result</td>
            </tr>
        </thead>

        {/* table body */}
        <tbody>
            <tr className='table-body'>
                <td>John</td>
                <td>03</td>
                <td>20</td>
                <td>Passed</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
