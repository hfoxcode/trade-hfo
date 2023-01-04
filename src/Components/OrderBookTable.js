// import React from "react"
// import { useEffect } from 'react'
// import * as Binance from 'binance-api-node'
// import { useTable } from 'react-table'

// function useBinanceOrderBook(symbol, callback) {
//   useEffect(() => {
//     const client = Binance()
//     const ws = client.ws.depth(symbol, callback)

//     return () => {
//       ws.close()
//     }
//   }, [symbol])
// }

// export function OrderBookTable({ symbol }) {
//   const [data, setData] = React.useState([])

//   useBinanceOrderBook(symbol, update => {
//     setData(state => {
//       const asks = update.asks.map(entry => ({ ...entry, side: 'sell' }))
//       const bids = update.bids.map(entry => ({ ...entry, side: 'buy' }))
//       return [...state, ...asks, ...bids]
//     })
//   })

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Price',
//         accessor: 'price',
//       },
//       {
//         Header: 'Quantity',
//         accessor: 'quantity',
//       },
//       {
//         Header: 'Side',
//         accessor: 'side',
//       },
//     ],
//     []
//   )

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data })

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row)
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map(cell => {
//                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//               })}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )
// }