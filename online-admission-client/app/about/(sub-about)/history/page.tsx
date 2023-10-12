import ContentList from "@/components/ui/SubContents";
import { dlIbtcHistoryData, historyData } from "@/public/data/sectionData";
import React from "react";

const HistoryPage = async () => {
  return (
    <>
      <ContentList
        data={historyData}
        additionalData={dlIbtcHistoryData}
        pageTitle="Our History"
      />
    </>
  );
};

export default HistoryPage;
