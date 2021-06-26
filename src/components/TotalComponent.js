import React from 'react';

const TotalComponent = ({ items }) => {
  const total_basic_cost = items.reduce((a, b) => a + b.basic_cost, 0);
  const total_dicount = items.reduce((a, b) => a + b.discount_amt, 0);
  const total_final_basic_cost = items.reduce(
    (a, b) => a + b.final_basic_cost,
    0
  );
  const total_tax = items.reduce((a, b) => a + b.tax_amt, 0);
  const final_price = items.reduce((a, b) => a + b.total_cost, 0);

  return (
    <thead>
      <tr>
        <th colSpan={9} />
        <th className="blue-table"> Total Basic Cost</th>
        <th className="blue-table">{total_basic_cost}</th>
      </tr>
      <tr>
        <th colSpan={9} />
        <th className={'grey-table'}> Total Discount</th>
        <th className={'grey-table'}>{total_dicount}</th>
      </tr>
      <tr>
        <th colSpan={9} />
        <th className={'grey-table'}> Total Final Baisc Cost</th>
        <th className={'grey-table'}>{total_final_basic_cost}</th>
      </tr>
      <tr>
        <th colSpan={9} />
        <th className={'grey-table'}>Total Tax</th>
        <th className={'grey-table'}>{total_tax}</th>
      </tr>
      <tr>
        <th colSpan={9} />
        <th className={'grey-table'}>Total Price</th>
        <th className={'grey-table'}>{final_price}</th>
      </tr>
      <tr>
        <th></th>
      </tr>
      <tr>
        <th colSpan={10} />
        <th
          className="blue-table align-center pointer"
          onClick={() => alert('data saved')}
        >
          SAVE
        </th>
      </tr>
    </thead>
  );
};

export default TotalComponent;
