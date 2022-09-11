import styles from './Avatar.module.scss';

export const Avatar = ({ img, alt, dataTestId = 'avatar', ...rest }) => {
  return (
    <div {...rest} className={styles.avatar}>
      <img src={img} alt={alt} data-testid={dataTestId} />
    </div>
  );
};
