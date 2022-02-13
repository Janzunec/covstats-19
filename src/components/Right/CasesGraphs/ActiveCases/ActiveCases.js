import React, { useState } from "react";
import CasesGraph from "../CasesGraph";

export default function ActiveCases() {
  return (
    <div>
      <CasesGraph casesType="active" />
    </div>
  );
}
