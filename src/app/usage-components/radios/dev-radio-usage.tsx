"use client";
import React, { useState } from "react";
import DevRadio from "../../../../public/preview-components/tsx-preview/radios/dev-radio";

const DevRadioUsage = () => {
  const [radioValue, setRadioValue] = useState("Male");

  return (
    <div>
      <DevRadio
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        radioOptions={["Male", "Female", "Other"]}
      />
    </div>
  );
};

export default DevRadioUsage;
