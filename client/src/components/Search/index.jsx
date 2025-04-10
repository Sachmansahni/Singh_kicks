import React from "react"
import '../Search/style.css'
import Button from '@mui/material/Button';
import {IoSearch} from "react-icons/io5"

const Search = () =>{
    return(
        <div className="flex searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input type="text" placeholder="Search for products..." className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]" />
            <Button variant="!absolute top-[5px] right-[5px] z-50 !w-[35px] !min-w-[45px] h-[35px] !rounded-full" ><IoSearch className="text-black"/></Button>
        </div>
    )
}

export default Search;