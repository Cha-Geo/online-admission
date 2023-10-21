import ContentList from "@/components/ui/SubContents";
import { addCoreValues, coreValuesData } from "@/public/data/sectionData";
import React from "react";


const CoreValuesPage = async () => {
  return (
    <>
      <ContentList
        data={coreValuesData}
        additionalData={addCoreValues}
        pageTitle="core values"
      />
    </>
  );
};

export default CoreValuesPage;
