import React,{useState,useEffect} from 'react'

export const StatusMap = ({ status}:any) => {
    const [color, setColor] = useState("#000");
    useEffect(() => {
      if (status === 'pending') {
        setColor('#DDAC54');
      } else if (status === 'sent') {
        setColor('#4375FF');
      } else if (status === 'canceled') {
        setColor('#BEC2C6');
      }else if (status === 'Inactive') {
            setColor('#707070');
      } else {
        setColor('black');
      }
    }, [status]);
    return (
        <div style={{color: color }}>
          {status}
        </div>
      );
}
  export default StatusMap;
