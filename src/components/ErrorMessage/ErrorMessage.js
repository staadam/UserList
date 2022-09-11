import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({ message = 'Something went wrong. Please try again later.' }) => {
  return <div className={styles.error}>{message}</div>;
};
