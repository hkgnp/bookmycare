import React, { useState } from 'react';
import Context from '../Context';
import RenderServices from './RenderServices';

const AllServices = () => {
  // States
  const [services] = useState({
    services: [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'test 2' },
    ],
  });
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

  //Context
  const context = {
    services: () => {
      return services.services;
    },
  };

  //Pagination
  const managePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <div style={{ height: '100vh' }}>
        <Context.Provider value={context}>
          <RenderServices />
        </Context.Provider>
      </div>
    </React.Fragment>
  );
};

export default AllServices;
