import { FC } from 'react';
import styles from './Glitch.module.css';

type GlitchProps = {
  text: string;
};

const GlitchText: FC<GlitchProps> = ({ text }) => (
  <div className={styles.glitch} data-text={text}>
    {text}
  </div>
);

export default GlitchText;
