"use client";
import React from "react";
import ContentBox from "@/components/ContentBox";
import InfoCard from "@/components/InfoCard";

function MetricsView(): JSX.Element {
  return (
    <>
      <ContentBox
        align="start"
        description="We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster."
        tag="Launch faster"
        title="Build something great"
      />
      <InfoCard />
    </>
  );
}

export default MetricsView;
