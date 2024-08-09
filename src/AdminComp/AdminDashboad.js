import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import AdminSidebar from './AdminSidebar';
import StatsCard from './StatsCard';

const data = [
  { date: '2024-07-29', sales: 2000 },
  { date: '2024-07-30', sales: 1500 },
  { date: '2024-07-31', sales: 1000 },
  { date: '2024-08-01', sales: 500 },
  { date: '2024-08-02', sales: 0 },
  { date: '2024-08-03', sales: 500 },
  { date: '2024-08-04', sales: 2000 },
  { date: '2024-08-05', sales: 0 },
];

const pieData = [
  { name: 'Full Service', value: 400 },
  { name: 'Organic Baby Carrot', value: 300 },
  { name: 'Mint', value: 100 },
  { name: 'Calabaza Squash', value: 200 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE'];

const AdminDashboad = () => {
  return (
    
    <div>
      <AdminSidebar/>
    <StatsCard/>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '60%' }}>
        <h2>Weekly Services</h2>
        <LineChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#00C49F" />
        </LineChart>
      </div>
      <div style={{ width: '35%' }}>
        <h2>Best Booking</h2>
        <PieChart width={490} height={495}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboad;