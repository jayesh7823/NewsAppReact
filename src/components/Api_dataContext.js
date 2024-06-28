
import React, { createContext, useEffect, useState } from "react";

const NewsDataContext = createContext();

const NewsDataProvider = ({children, valueTopic}) => {
    const [newsData, setNewsData] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{ 
                const response = await fetch(`https://inshortsapi.vercel.app/news?category=${valueTopic}`);
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error("Error Fetching Data: ", error);
            }
        };
        fetchData();
    }, [valueTopic]);

    return(
        <NewsDataContext.Provider value={newsData}>
            {children}
        </NewsDataContext.Provider>
    );
};

export {NewsDataContext, NewsDataProvider};