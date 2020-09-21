import React, {useState} from 'react';
import './composite.less';

function Composite ({ isShow, setFilterOptionCb }) {
    const [curOption, setCurOption] = useState(0);

    function chooseOption(index) {
        if (curOption === index) {
            return;
        }

        setCurOption(index);
        setFilterOptionCb({
            compositeOption: curOption
        });
    }

    return (
        <ul className={`composite-option-wrapper ${isShow ? '' : 'hide'}`}>
            <li className={`item ${curOption === 0 ? 'cur' : ''}`} onClick={() => chooseOption(0)}>综合排序</li>
            <li className={`item ${curOption === 1 ? 'cur' : ''}`} onClick={() => chooseOption(1)}>离我最近(定位失败)</li>
            <li className={`item ${curOption === 2 ? 'cur' : ''}`} onClick={() => chooseOption(2)}>价格最低</li>
        </ul>
    )
}

export default Composite;