import styles from './Table.module.scss';

export const Table = ({ dataToShow = {}, keyName = 'table', dataTestId = 'table' }) => {
  return (
    <table className={styles.table} data-testid={dataTestId}>
      <tbody>
        {Object.keys(dataToShow).map((valueKey, idx) => {
          return (
            <tr key={`${keyName}-${idx}`} data-testid={`${dataTestId}-row`}>
              <th>{valueKey}</th>
              <td>{dataToShow[valueKey]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
