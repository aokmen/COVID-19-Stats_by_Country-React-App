import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Line from './Line';
import Bar from './Bar';
import Area from './Area';

const AreaChart = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('germany');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (country) {
      axios
        .get(`https://corona.lmao.ninja/v2/countries/${country}`)
        .then((res) => {
          setData([res.data]);
        })
        .catch((err) => console.log(err));
    } else {
      setData([]);
    }
  }, [country]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCountry(inputValue.toLowerCase());
    }
  };

  const handleSearchClick = () => {
    setCountry(inputValue.toLowerCase());
  };

  return (
    <>
      <div className="chart">
        <div className='input'>
          <input
            type="text"
            placeholder="Enter a country name:"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />

          <div className='btn'><button onClick={handleSearchClick}>Search</button></div>
          <div className="label"> <label htmlFor=""> {data[0]?.country}</label></div>
          {data.length > 0 && <img src={data[0]?.countryInfo?.flag} alt="Country Flag" />}
          <div className='area'>{data.length > 0 && <Area datax={data[0]} />}</div>
        </div>
        <div className="chart2">
          <div className='line'>{data.length > 0 && <Line datas={data[0]} />}</div>
          <div className='bar'>{data.length > 0 && <Bar datam={data[0]} />}</div>
        </div>
      </div>
    </>
  );
};

export default AreaChart;
