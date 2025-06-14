import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Search from "./Search";
import Add from "./Add";

const Dashboard=()=>{

    return(
        <>
      <h1>New Table</h1>
        <Search />
        <Add />
       



        
        </>
    )
}
export default Dashboard;
