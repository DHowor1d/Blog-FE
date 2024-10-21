import React from "react";
import PageContainer from "../components/common/PageContainer";
import Header from "../components/common/Header";
import TabBar from "../components/common/TabBar";
import Card from "../components/common/Card";

const MainPage = () => {
  return (
    <PageContainer>
      <Header />
      <TabBar />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {Array(9).fill(0).map((item) =>
          <Card/>
        )}

      </div>
    </PageContainer>
  );
};

export default MainPage;
