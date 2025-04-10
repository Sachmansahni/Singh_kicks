import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia"
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go"

const Navigation =() =>{
    return(
        <nav className="py-2">
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[35%]">
                    <Button className="!text-black gap-2 w-full">
                        <RiMenu2Fill className="text-[18px]"/>Shop By Category
                        <LiaAngleDownSolid className="text-[14px] ml-auto font-bold"/>
                    </Button>
                </div>
                <div className="col_2 w-[75%] ">
                    <ul className="flex items-center gap-4">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500] ">Home</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500] ">Fashion</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500] ">New Arrivals</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500] ">All Brands</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500] ">More</Link>
                        </li>
                    </ul>
                </div>

                <div className="col_3 w-[25%]">
                    <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
                    <GoRocket className="text-[18px]"/>
                        Enjoy Free shipping
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation