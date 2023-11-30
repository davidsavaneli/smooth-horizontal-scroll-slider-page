import React from "react";
import { SliderContainer, SliderItem } from "smooth-horizontal-scroll-slider";

import styles from "./styles.module.css";

const View = () => {
  return (
    <div className={styles.test}>
      <SliderContainer>
        <SliderItem>1</SliderItem>
        <SliderItem>2</SliderItem>
        <SliderItem>3</SliderItem>
      </SliderContainer>
    </div>
  );
};

export default View;
