import React from 'react';
import { uuid } from '../../../utils/main';
import { TableTypes } from './Table.types';

const Table: React.FC<TableTypes> = props => {
  const { columns, dataSource } = props;
  if (!columns.length) return <></>;

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
        {/* Table heading */}
        <thead className="text-gray-700 uppercase bg-gray-100">
          <tr>
            {columns.map(clm => {
              return (
                <th scope="col" className="py-3 px-6" key={uuid()}>
                  {clm.title}
                </th>
              );
            })}
          </tr>
        </thead>
        {/* Table Rows */}
        <tbody>
          {dataSource.length ? (
            dataSource.map((obj: any) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={uuid()}
                >
                  {columns.map(clm => {
                    return (
                      <td className="py-4 px-6" key={uuid()}>
                        {obj[clm.dataIndex] || '-'}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <p className="font-bold w-full p-4 text-gray-600 mx-auto">
              No Data to display ❌
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
