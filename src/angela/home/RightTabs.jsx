import React from 'react'
import "./RightTabs.css"
import { ShoppingCartOutlined, FileImageOutlined, WalletOutlined } from '@ant-design/icons';

function RightTabs() {
    return (
        <div className='right_tab_container'>
            <ShoppingCartOutlined className='right_tab_icon'/>
            <FileImageOutlined className='right_tab_icon' />
            <WalletOutlined className='right_tab_icon' />
        </div>
    )
}

export default RightTabs