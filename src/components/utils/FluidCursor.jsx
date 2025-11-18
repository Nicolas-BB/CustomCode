import { useEffect } from 'react';
import fluidCursor from '../utils/useFluidCursor';
import styles from '../../styles/fluid.module.css'

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div id='fluid-container' className={styles.fluid}>
      <canvas id="fluid" />
    </div>
  );
};
export default FluidCursor;