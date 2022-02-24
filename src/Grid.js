import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
      {config.map(conf => 
        <th>{conf.title}</th>
      )}
    </tr>
    </thead>
    <tbody>
      {data.map(info =>
      <tr>
        {config.map(conf => 
          <td>
          {conf.component ?
            conf.component({ data: info[conf.field] }) :
            info[conf.field]}
          </td>
        )}
      </tr>
      )}
    </tbody>
  </table>
);

export default Grid;