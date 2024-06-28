import React from "react";
import { Route, Routes} from "react-router-dom";
import Home, {OtherNews, ReadMore} from "../pages/Home";

function Navigate(){
    return(
        <div id="bodyColor">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:topic1" element={<OtherNews />} />
                <Route path="/:topic2/:id" element={<ReadMore />} />
            </Routes>
        </div>
    );
}

export default Navigate;