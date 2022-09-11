import styles from './Table.module.scss';

export const Table = ({ dataToShow, keyName }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {Object.keys(dataToShow).map((valueKey, idx) => {
          return (
            <tr key={`${keyName}-${idx}`}>
              <th>{valueKey}</th>
              <td>{dataToShow[valueKey]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
