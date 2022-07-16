import React from 'react'
import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">VibeRace Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardRoundedIcon className='icon'/>
                    <span>Dashboard</span>
                </li>

                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineRoundedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <StorefrontOutlinedIcon className='icon'/>
                    <span>Products</span>
                </li>           
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>           
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Stats</span>
                </li>          
                <li>
                    <NotificationsIcon className='icon'/>
                    <span>Notifications</span>
                </li>

                <p className="title">SERVICE</p>          
                <li>                
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>            
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>          
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>

                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar