import React, { useState } from 'react';
import Card from '../components/Card';
import Link from '../components/buttons/Link';
import Table from '../components/Table';
import SelectField from '../components/inputs/SelectField';
import TextField from '../components/inputs/TextField';
import DatePicker from '../components/inputs/DatePicker';
import Badge from '../components/Badge';
import numeral from 'numeral';
import Pagination from '../components/Pagination';
import EmptyRules from '../components/EmptyRules';
import ExistRules from '../components/ExistRules';
import CardRule from '../components/CardRule';
import SearchInput from './../components/SearchInput';
import SettingsBlock from './../components/SettingsBlock';
// import ToggleSwitch from './../components/ToggleSwitch/ToggleSwitch.js';
import ButtonView from '../components/ButtonView';
import { ChartViewIcon, TableViewIcon, SettingsIcon } from './../components/icons';
// import Switch from './../components/ToggleSwitch/Switch.js';
// import RuningString from '../components/RuningString'
import RuleList from '../components/RuleList';
import { connect } from 'react-redux';
import FilterBlock from '../components/FilterBlock';
import { LineChart, Line, Legend, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import Button from '../components/buttons/BtnMain'
import { toggleModal } from '../actions/ui'

import DeleteRule from '../components/forms/DeleteRule'
import Leave from '../components/forms/Leave'
import WayToGo from '../components/forms/WayToGo'

const cardRuleData = [
  {
    type: 'currency',
    total: 136990.32,
    title: 'Total revenue',
    before: 9699,
    percent: 12,
    success: true,
  },
  {
    type: 'count',
    total: 1250,
    title: 'Total Tickets',
    before: 1600,
    percent: 2,
    success: false,
  },
  {
    type: 'currency',
    total: 132.5,
    title: 'Overal ATP',
    before: 102,
    percent: 2,
    success: true,
  },
];

//MAIN TABLE
const productsData = [
  {
    product: 'TBV London-TKV Geneva',
    date: '18/02',
    revenue: 862292.06,
    changefirst: -1.35,
    tickets: 400,
    changesecond: 0,
    atp: 40.64,
    baserevenue: 862292.06,
  },
  {
    product: 'TBV London-TKV Geneva',
    date: '18/02',
    revenue: 862292.06,
    changefirst: -1.35,
    tickets: 400,
    changesecond: 0.55,
    atp: 40.64,
    baserevenue: 862292.06,
  },
  {
    product: 'TBV London-TKV Geneva',
    date: '18/02',
    revenue: 862292.06,
    changefirst: -1.35,
    tickets: 400,
    changesecond: 0.55,
    atp: 40.64,
    baserevenue: 862292.06,
  },
  {
    product: 'TBV London-TKV Geneva',
    date: '18/02',
    revenue: 862292.06,
    changefirst: -1.35,
    tickets: 400,
    changesecond: 0.55,
    atp: 40.64,
    baserevenue: 862292.06,
  },
];

const graphicData = [
  {
    name: 'Jan', line1: 4000, line2: 2400, line3: 2400,
  },
  {
    name: 'Fab', line1: 3000, line2: 1398, line3: 2210,
  },
  {
    name: 'Mar', line1: 2000, line2: 9800, line3: 2290,
  },
  {
    name: 'Apr', line1: 2780, line2: 3908, line3: 2000,
  },
  {
    name: 'May', line1: 1890, line2: 4800, line3: 2181,
  },
  {
    name: 'Jun', line1: 2390, line2: 3800, line3: 2500,
  },
  {
    name: 'Jul', line1: 3490, line2: 4300, line3: 2100,
  },
  {
    name: 'Aug', line1: 3490, line2: 4300, line3: 2100,
  },
  {
    name: 'Sep', line1: 3490, line2: 4300, line3: 2100,
  },
  {
    name: 'Oct', line1: 3490, line2: 4300, line3: 2100,
  },
  {
    name: 'Nov', line1: 3490, line2: 4300, line3: 2100,
  },
  {
    name: 'Dec', line1: 3490, line2: 4300, line3: 2100,
  }
]

const Dashboard = ({filterColumns, dispatch}) => {
  const [form, setForm] = useState({
    dateTransaction: '',
    transactionLimit: '',
    instrumentAcc: '',
    txType: '',
    txCategory: '',
  });
  const [startDate, setStartDate] = useState(null);

  // const [tab, setTab] = useState(false);
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(true);

  const changeView = () => {
    setShow(!show);
  };

  //MAIN TABLE
  const columnsProducts = [
    {
      title: 'Product Name',
      key: 'product',
    },
    {
      title: 'Date',
      key: 'date',
    },
    {
      title: 'Revenue',
      key: 'revenue',
    },
    {
      title: '%Change',
      key: 'changefirst',
      cell: (row) => renderChangeCell(row.changefirst),
    },
    {
      title: 'Tickets',
      key: 'tickets',
    },
    {
      title: '%Change',
      key: 'changesecond',
      cell: (row) => renderChangeCell(row.changesecond),
    },
    {
      title: 'ATP',
      key: 'atp',
    },
    {
      title: 'Base Revenue',
      key: 'baserevenue',
    },
  ];
  const handleChange = (field) => (value) => {
    setForm({ ...form, [field]: value });
  };
  const handleChangeDate = (date) => {
    setStartDate(date);
  };
  const renderBalanceCell = (num) => {
    const numString = `USD ${numeral(num).format('0,0.00')}`;
    return num > 0 ? (
      numString
    ) : (
      <span className="text-danger">{numString}</span>
    );
  };
  const renderStatusCell = (status) => {
    switch (status) {
      case 'Inactive':
        return <Badge title={status} level="secondary" />;
      case 'Suspended':
        return <Badge title={status} level="danger" />;
      default:
        return <Badge title={status} />;
    }
  };

  const renderChangeCell = (change) => {
    const getChange = change > 0 ? 'positive' : change < 0 ? 'negative' : '';
    switch (getChange) {
      case 'positive':
        return <Badge title={change} level="success" />;
      case 'negative':
        return <Badge title={change} level="danger" />;
      default:
        return <Badge title={change} />;
    }
  };

  const handleDeleteModal = () => {    
    dispatch(toggleModal(true, 'Delete the rule #2?', <DeleteRule />, 'modal-sm'))
  }

  const handleLeaveModal = () => {    
    dispatch(toggleModal(true, 'Do you want to leave?', <Leave />, 'modal-sm'))
  }

  const handleWayToGoModal = () => {
    dispatch(toggleModal(true, '', <WayToGo />, 'modal-md'))
  }

  return (
    <div className="h-100 container-fluid pt-3">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-9 mb-3">
          <div className="d-flex justify-content-between mb-3">                                      
            <div>              
              <h4 className="title-section">Attendance pricing Strategy</h4>
            </div>
            <div>
              <div className="change-view-table d-flex">
                <div>
                  <ButtonView
                    title="Chart view"
                    changeView={changeView}
                    show={!show}
                    icon={ChartViewIcon}
                  />
                </div>
                <div>
                  <ButtonView
                    title="Table view"
                    changeView={changeView}
                    show={show}
                    icon={TableViewIcon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            {cardRuleData.map((item, i) => {
              const total =
                item.type === 'currency'
                  ? numeral(item.total).format('0,0[.]00 $')
                  : item.total;
              const before =
                item.type === 'currency'
                  ? numeral(item.before).format('0,0[.]00 $')
                  : item.before;
              return (
                <div key={i} className="col-12 col-lg-4">
                  <Card>
                    <CardRule
                      total={total}
                      title={item.title}
                      before={before}
                      percent={item.percent}
                      success={item.success}
                    />
                  </Card>
                </div>
              );
            })}
          </div>
          {
            show
              ? <div>
                  <Card className="h-100">
                    <div className="p-2 d-flex justify-content-between">
                      <div>
                        <SearchInput
                          value={query}
                          onChange={(val) => setQuery(val)} />
                      </div>
                      <div>
                        <SettingsBlock columnsProducts={columnsProducts} />
                      </div>
                    </div>
                    <div>
                      <Table columns={columnsProducts.filter(col => !filterColumns.includes(col.key))} data={productsData} />
                    </div>
                  </Card>
                </div>
              : <div>
                <div className="mb-3">
                    <Card>
                      <div className="graph-head">
                        <h3>Heatmap Graph</h3>
                        <div>
                          <div className="nav-lists-graph">
                            <div>
                              Current
                              <div className="bell dark"></div>
                            </div>
                            <div>
                              Optimised
                              <div className="bell"></div>
                            </div>
                          </div>
                          <div
                            className={`button-with-dropdown mr-2`}                            
                          >        
                            <SettingsIcon fill="#607990" />
                          </div>
                        </div>
                      </div>
                      <div className="graph-wrapper">
                        Chart view - Graphics
                      </div>
                    </Card>
                  </div>

                  <div className="mb-3">
                    <Card>
                      <div className="graph-head">
                        <h3>Graph 3</h3>
                        <div>
                          <div className="nav-lists-graph">
                            <div>
                              Current
                              <div className="bell dark"></div>
                            </div>
                            <div>
                              Optimised
                              <div className="bell"></div>
                            </div>
                          </div>
                          <div
                            className={`button-with-dropdown mr-2`}                            
                          >        
                            <SettingsIcon fill="#607990" />
                          </div>
                        </div>
                      </div>
                      <div className="graph-wrapper">
                        <ResponsiveContainer width={'100%'} height={300}>
                          <LineChart data={graphicData}>
                            <Line type="monotone" dataKey="line1" stroke="#FF7038" isAnimationActive={false} dot={{ stroke: '#FF7038', fill: '#FF7038' }} />
                            <Line type="monotone" dataKey="line2" stroke="#0B3546" isAnimationActive={false} dot={{ stroke: '#0B3546', fill: '#0B3546' }} />
                            <Line type="monotone" dataKey="line3" stroke="#0B3546" isAnimationActive={false} dot={{ stroke: '#0B3546', fill: '#0B3546' }} />
                            <YAxis axisLine={{strokeWidth: 1}} label="Demand" />
                            <YAxis label="ATP" />
                            <XAxis dataKey="name" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                  </div>
                </div>
          }
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-3">
          <Card>
            {
              show ? <RuleList /> : <ExistRules />
            }                        
          </Card>
        </div>
      </div>

      <div className="d-flex">
        <div>
          <Button title="delete modal" variant="standart" onClick={handleDeleteModal}></Button>
        </div>
        <div className="ml-3">
          <Button title="leave modal" variant="standart" onClick={handleLeaveModal}></Button>
        </div>
        <div className="ml-3">
          <Button title="way to go modal" variant="standart" onClick={handleWayToGoModal}></Button>
        </div>                
      </div>

    </div>
  );
};

const mapStateToProps = ({ app }) => ({
  filterColumns: app.filterColumns,
});

export default connect(mapStateToProps)(Dashboard);
