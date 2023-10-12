// pages/core-values.js

import ContentList from "@/components/ui/SubContents";
import { aimsGoalsObjectives, coreValuesData } from "@/public/data/sectionData";
import React from "react";

const ObjectivesPage = async () => {
  return (
    <ContentList
      data={aimsGoalsObjectives}
      pageTitle="aims, goals and objectives"
    />
  );
};

export default ObjectivesPage;
