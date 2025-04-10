import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Button from "@mui/material/Button"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoIosGitCompare } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa6"

import { Tooltip } from '@mui/material';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Header = () =>{
    return(
        <header className='bg-white'>
            <div className='top-strip py-2 '>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[14px] font-[500]">Get up to 50% off new season styles , limited time offer</p>
                        </div>
                        <div className="col2 flex items-center justify-end">
                            <ul className='flex items-center gap-3'>
                                <li className='list-none border-none'>
                                    <Link to="/help-center" className='text-[12px] link font-[500] transition'>Help Center</Link>
                                </li>

                                <li className='list-none border-none'>
                                    <Link to="/order-tracking" className='text-[12px] link font-[500] transition'>Order Tracking</Link>
                                </li>

                                <li className='list-none border-none'>
                                    <Link to="/about-us" className='text-[12px] link font-[500] transition'>About us</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header py-3 mid-strip'>
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to={"/"}><img src="/brand_logo.jpeg"/></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search/>
                    </div>
                    <div className="col3 w-[30%] flex items-center">
                        <ul className='flex items-center justify-end gap-3 w-full'>
                            <li className="list-none">
                                <Link to="/login" className='link transition text-[16px] font-[500]'>Login</Link> | &nbsp;<Link to="/login" className='link transition text-[16px] font-[500]'>Register</Link>
                            </li>
                            <li>
                                <Tooltip title="Compare">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <IoIosGitCompare />
                                    </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <MdOutlineShoppingCart />
                                    </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wishlist">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaRegHeart />
                                    </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Navigation/>
        </header>
    )
}

export default Header