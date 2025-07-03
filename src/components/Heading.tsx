import styles from './Heading.module.css';

export function Heading({ nome }) {
  return <h1 className={styles.heading}>Olá, {nome}!</h1>;
}
