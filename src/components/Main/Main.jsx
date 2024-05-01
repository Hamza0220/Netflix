import React from "react";
import './Main.scss'
import Card from "../Card/Card";
import Sdata from "../SeriesData/Sdata";
function Main() {
  return (
    <>
    <h1 className="heading">List of top 5 notflix Series</h1>
      <Card imgsrc = {Sdata[0].imgSrc} category={Sdata[0].category} title={Sdata[0].title} link={Sdata[0].link} />
      <Card imgsrc = {Sdata[1].imgSrc} category={Sdata[1].category} title={Sdata[1].title} link={Sdata[1].link} />
      <Card imgsrc = {Sdata[2].imgSrc} category={Sdata[2].category} title={Sdata[2].title} link={Sdata[2].link} />
      <Card imgsrc = {Sdata[3].imgSrc} category={Sdata[3].category} title={Sdata[3].title} link={Sdata[3].link} />
      <Card imgsrc = {Sdata[4].imgSrc} category={Sdata[4].category} title={Sdata[4].title} link={Sdata[4].link} />
   
    </>
  );
}

export default Main;
