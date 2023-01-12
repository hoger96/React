import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import GrandSonBox from './GrandSonBox';

const Box = () => {
    let count = useSelector((state) => state.count);
  return (
    <div>
        This is box{count}
        <GrandSonBox />
    </div>
  )
}

export default Box