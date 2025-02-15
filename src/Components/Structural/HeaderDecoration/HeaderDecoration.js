// @ts-check
import React from "react";
import "./HeaderDecoration.scss";

import ChristmasLights from "./ChristmasLights/ChristmasLights";

/**
 * @namespace HeaderDecoration
 * @function HeaderDecoration
 * @author Alexander Burdiss
 * @since 11/01/21
 * @version 1.0.0
 * @component
 */
export default function HeaderDecoration() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  // Christmas in July
  if (currentMonth == 7 && currentDay == 25) {
    return <ChristmasLights />;
  }

  // Decorating for Christmas
  if (currentMonth == 11 || (currentMonth == 12 && currentDay < 26)) {
    return <ChristmasLights />;
  }

  return null;
}
