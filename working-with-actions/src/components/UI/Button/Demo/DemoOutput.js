import React from 'react';
import MyP from '../../Demo/MyP';

const DemoOutput = props => {
    return       <MyP>{props.show?  'This is new!': ''}</MyP>

};  

export default React.memo(DemoOutput);