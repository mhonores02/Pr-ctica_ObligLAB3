import PropTypes from "prop-types";

const Table = ({ netIncome }) => {
  return (
    <>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {netIncome.map((netIncome, index) => {
              return (
                <tr key={index}>
                  <td>{netIncome.brand}</td>
                  <td>{netIncome.income}</td>
                </tr>
              );
            })}
          </tbody>
    </>
  );
};

export default Table

Table.propTypes = {
    netIncome: PropTypes.array,
  };