/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function TransactionHistory(props) {
  const items = props.items;
  const view = items.map(item => (
    <tr
      key={item.id}
      css={{
        backgroundColor: 'rgb(211, 230, 235)',
        ':nth-of-type(odd)': { backgroundColor: 'white' },
      }}
    >
      <td css={{ textTransform: 'capitalize', padding: 10, paddingLeft: 130, textAlign: 'left' }}>
        {item.type}
      </td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <table
      css={{
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '-1px 3px 20px -11px rgba(66, 68, 90, 1);',
        borderRadius: 10,
      }}
    >
      <thead>
        <tr
          css={{
            textTransform: 'uppercase',
            fontSize: 15,
            backgroundColor: 'rgb(3, 206, 252)',
            color: 'white',
          }}
        >
          <th css={{ width: 300, paddingTop: 20, paddingBottom: 20 }}>Type</th>
          <th css={{ width: 300, paddingTop: 20, paddingBottom: 20 }}>Amount</th>
          <th css={{ width: 300, paddingTop: 20, paddingBottom: 20 }}>Currency</th>
        </tr>
      </thead>
      <tbody>{view}</tbody>
    </table>
  );
}

export default TransactionHistory;
