import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import StarIcon from '@mui/icons-material/Star';

export function Sidebar() {
    return (
        <div className="sidebar">
            <img src={"./Images/other/spades_ace_simple.svg"} width="50%" id="logo" className="sidebarItem" alt="Logo"/>
            <HomeIcon color={"primary"} width="75%" id="homeIcon" className="sidebarItem"/>
            <TableRestaurantIcon color={"primary"} width="50%" id="sendIcon" className="sidebarItem"/>
            <StarIcon color={"primary"} width="50%" id="starIcon" className="sidebarItem"/>
        </div>
    );
}