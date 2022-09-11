import styles from './Avatar.module.scss';

export const Avatar = ({ img, alt, ...rest }) => {
  return (
    <div {...rest} className={styles.avatar}>
      <img src={img} alt={alt} />
    </div>
  );
};
