import React from 'react';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const DemandChart = ({data}) =>  {    
    return ( 
      <div className="demand-chart">           
        <div className="graph-head">
          <div>
            Offline
          </div>
          <div>
            Overall
          </div>        
        </div>
        <div className="vertical-head-left">Demand</div>
        <div className="vertical-head-right">ATP</div>
        <BarChart
          width={600}
          height={230}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid stroke="#E6E9ED" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="ATP" stackId="a" fill="#E5E9ED" />
          <Bar dataKey="ATP_UP" stackId="a" fill="#00C165" />
          <Bar dataKey="Demand" stackId="a" fill="#072C3B" />
          <Bar dataKey="Demand_UP" stackId="a" fill="#F64D4D" />
        </BarChart>
      </div>
    );  
}

export default DemandChart