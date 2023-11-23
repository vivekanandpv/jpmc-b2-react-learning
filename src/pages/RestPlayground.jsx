import React from 'react';
import axios from "axios";
import {httpService} from "../http-service";
import {RestContext} from "../App";

const RestPlayground = (props) => {
    const contextValue = React.useContext(RestContext);

    return (
        <>
            <h3>Playground <button className="btn btn-primary btn-sm" onClick={contextValue.fetchData}>Fetch Data</button></h3>
            <table className="table table-bordered table-sm">
                <thead>
                <tr>
                    <th>
                        Marker
                    </th>
                    <th>
                        Count
                    </th>
                </tr>
                </thead>
                <tbody>
                {contextValue?.statistics.map((s, i) => (
                    <tr key={i}>
                        <td>{s.marker}</td>
                        <td>{s.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default RestPlayground;