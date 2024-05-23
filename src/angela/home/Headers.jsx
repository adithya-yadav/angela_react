import React, { useState } from 'react'
import { Input, Layout, Menu } from 'antd';
import "./Headers.css"
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';

function Headers() {
    const [showList, setShowList] = useState(false)
    const [selectedHeader, setSelectedHeader] = useState("Home")
    const [listValue, setListValue] = useState("")
    const { Header } = Layout;
    const Dummy = [
        "Home", "Features", "Our Services", "Pregnancy", "Birth Control", "Contacts"
    ]
    return (
        <Header className='headers_container'>
            <img src='https://angela.ancorathemes.com/wp-content/uploads/2017/08/logo.jpg' alt='header logo' />
            <Menu
                className='headers_menu'
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['Home']}
                items={Dummy.map((men) => {
                    return {
                        key: men,
                        label: men
                    }
                })}
            />
            <button className='contact_us'>Contact us</button>
            <UnorderedListOutlined className='headers_list' onClick={() => setShowList(true)} />
            {showList &&
                <div className='list_container'>
                    <img src='https://angela.ancorathemes.com/wp-content/uploads/2017/11/logo.png' alt='header logo' />
                    <button className='list_container_btn' onClick={() => setShowList(false)}>x</button>
                    {
                        Dummy.map((data) => {
                            return <span key={data} onClick={() => setSelectedHeader(data)} className={selectedHeader === data ? "selected_header" : ""}>{data}</span>
                        })
                    }
                    <div className='list_search' placeholder='Search' >
                        <input className='list_input' placeholder='Search' onChange={(e) => setListValue(e.target.value)} />
                        <SearchOutlined className='search_list_icon' />
                    </div>
                </div>
            }
        </Header>
    )
}

export default Headers