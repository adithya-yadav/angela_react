import React from 'react'
import "./AdMarket.css"
import { Button, Typography } from 'antd';

function AdMarket() {
    const { Text } = Typography;
    return (
        <div className='addMarket_container'>
            <div>
                <Text className='ad_envato'>envato</Text>
                <Text className="ad_market" type="success">market</Text>
            </div>
            <Button className='ad_buynow'>Buy Now</Button>
        </div>
    )
}

export default AdMarket