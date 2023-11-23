import React from 'react';
import axios from "axios";
import {httpService} from "../http-service";

const RestPlayground = (props) => {
    const fragments = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [statistics, setStatistics] = React.useState([]);

    React.useEffect(() => {
      const promises = fragments.map(f => {
          console.log('request in component', f);
          return httpService.get(f)
              .then(r => {
                  console.log('response in component', r);
                  return {
                      marker: f,
                      count: r.data.length
                  }
              });
      });

      Promise.all(promises)
          .then(s => setStatistics(_ => s))
          .catch(e => console.log('Error', e));
    }, []);


    return (
        <>
            <h3>Playground</h3>
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
                {statistics.map((s, i) => (
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