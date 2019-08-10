import React, { useEffect, useState } from "react";

import { ModuleService } from "../services/moduleService";

export default function ModuleView() {
  const [module, setModule] = useEffect(() => {
    getModule();
  }, []);

  async function getModule() {
    try {
      const data = await ModuleService.getModule();
      setModule(data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  return <div />;
}
