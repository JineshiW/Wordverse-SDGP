import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

// This component displays a table of results fetched from the server
export default function ResultTable() {

    // State to hold the fetched data
    const [data, setData] = useState([])

    // Fetch data from the server when the component mounts or updates
    useEffect(() => {
        // Utilize the helper function to fetch data from the server
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            // Update the state with the fetched data
            setData(res)
        })
    })

    return (
        <div>
            {/* Table to display results */}
            <table>
                {/* Table header */}
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Conditional rendering in case no data is available */}
                    { !data ?? <div>No Data Found </div>}
                    {/* Map through the data and display each result in a table row */}
                    {
                        data.map((v, i) => (
                            <tr className='table-body' key={i}>
                                <td>{v?.username || ''}</td>
                                <td>{v?.attempts || 0}</td>
                                <td>{v?.points || 0}</td>
                                <td>{v?.achived || ""}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
