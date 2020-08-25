import React, { useCallback } from "react";
import Interactive from "./Interactive";
import formatClassName from "../utils/formatClassName";
import hsvToHslString from "../utils/hsvToHslString";
import styles from "../styles.css";

const Alpha = ({ hsva, onChange }) => {
  const handleMove = useCallback(
    (interaction) => {
      onChange({ a: 1.0 - interaction.left });
    },
    [onChange]
  );

  const interactiveStyle = {
    //backgroundColor: hsvToHslString(hsva),
  }

  const pointerStyle = {
    top: "50%",
    left: `${hsva.a * 100}%`,
    backgroundColor: 'black',
  };

  const nodeClassName = formatClassName(["react-colorful__alpha", styles.alpha]);
  const pointerClassName = formatClassName(["react-colorful__alpha-pointer", styles.pointer, styles['alpha-pointer']]);

  return (
    <div className={nodeClassName}>
      <Interactive className={styles['alpha-interactive']} style={interactiveStyle} onMove={handleMove}>
        <div className={pointerClassName} style={pointerStyle} />
      </Interactive>
    </div>
  );
};

export default React.memo(Alpha);
