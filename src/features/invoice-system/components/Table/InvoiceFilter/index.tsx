import React, { useState } from 'react';

function InvoiceFilter({ data }) {
  const [filter, setFilter] = useState({
    all: true,
    invoice: false,
    service: false,
  });

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilter({ ...filter, [name]: checked });
  };

  const filteredData = data.filter((item) => {
    if (filter.all) {
      return true;
    } else if (filter.invoice) {
      const invoiceStatuses = ['sent', 'paid', 'pending', 'rejected', 'refunded', 'cancelled'];
      if (invoiceStatuses.includes(item.status)) {
        return true;
      }
    } else if (filter.service) {
      const serviceStatuses = ['active', 'inactive', 'rejected', 'pending'];
      if (serviceStatuses.includes(item.status)) {
        return true;
      }
    }
    return false;
  });

  return (
    <div>
      <label>
        <input type="checkbox" name="all" checked={filter.all} onChange={handleFilterChange} />
        All
      </label>
      <label>
        <input type="checkbox" name="invoice" checked={filter.invoice} onChange={handleFilterChange} />
        Invoice
      </label>
      <label>
        <input type="checkbox" name="service" checked={filter.service} onChange={handleFilterChange} />
        Service
      </label>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name} - {item.status}</li>
        ))}
      </ul>
    </div>
  );
}
export default InvoiceFilter;