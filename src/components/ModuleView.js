import React, { useEffect, useState } from "react";

import { ModuleService } from "../services/moduleService";

export default function ModuleView(props) {
  const [moduleItem, setModuleItem] = useState(null);
  const { match } = props;
  const moduleId = match.params.moduleId;

  useEffect(() => {
    getModule();
  }, []);

  async function getModule() {
    try {
      const data = await ModuleService.getModule(moduleId);
      setModuleItem(data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  return <>{moduleItem ? <div>{moduleItem.title}</div> : "Loading..."}</>;
}
