import React from "react";
import LoadNews, { MoreContent } from "../components/LoadNews";
import { NewsDataProvider } from "../components/Api_dataContext";
import { useParams } from "react-router-dom";

export default function Home(){
    return(
        <NewsDataProvider valueTopic={"all"}>
            <LoadNews topic="Top" />
        </NewsDataProvider>
    );
}

function OtherNews(){
    const {topic1} = useParams();
    return(
        <NewsDataProvider valueTopic={topic1}>
            <LoadNews topic={topic1} />
        </NewsDataProvider>
    );
}

function ReadMore(){
    const {topic2} = useParams();
    return(
        <NewsDataProvider valueTopic={topic2}>
            <MoreContent />
        </NewsDataProvider>
    );
}

export {OtherNews, ReadMore};