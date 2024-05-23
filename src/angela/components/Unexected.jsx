import React from 'react';
import { Divider } from 'antd';

function Unexected() {
    return (
        <div className='unexpected_container'>
            <div className='unexpected_left'>

            </div>
            <div className='unexpected_right'>
                <Divider orientation="right">UNEXPECTED PREGNANCY</Divider>
                <h1>I Am Pregnant, What Now?</h1>
                <div className='unexp_main_con'>
                    <h2 className='unexp_number'>1</h2>
                    <div className='unexp_container'>
                        <h3>
                            Take a pregnancy test.
                        </h3>
                        <p>
                            To get the most accurate result, we recommend you wait at least a week after you’ve missed your period to take the test.
                        </p>
                    </div>
                </div>
                <div className='unexp_main_con'>
                    <h2 className='unexp_number'>2</h2>
                    <div className='unexp_container'>
                        <h3>
                            Confide in those you trust.
                        </h3>
                        <p>
                            Many women have lots of different feelings when they find out they are pregnant. Often it helps to talk about it with someone else.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unexected