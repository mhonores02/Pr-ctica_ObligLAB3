import Table from "./components/table/Table";
const netIncome = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];
const sumNetIcomes = (array) => {
  return array.reduce((acc, current) => {
    return acc + current.income;
  }, 0);
};
function App() {
  return (
    <div>
        <Table netIncome={netIncome} />
        <h2>Promedio: {sumNetIcomes(netIncome) / netIncome.length}</h2>
    </div>
  );
};
export default App;