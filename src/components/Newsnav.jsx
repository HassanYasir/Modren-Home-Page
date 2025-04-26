import NewsContainer from './NewsContainer';
import { useState } from 'react';
import '../App.css'
import PropTypes from 'prop-types';



function Newsnav (prop){
    const [lineStyle,SetlineStyle] = useState({});
    const [cate,Setcategory] = useState({data:"Tech"});
    const apiCode = import.meta.env.VITE_API_KEY;
    // const apiCode = '380a233a4e454a23ab3df1d725320717';
    const optHandler = (e)=>{

        SetlineStyle({
            width:`${e.target.getBoundingClientRect().width}px`,
            position:'absolute',
            left:`${e.target.getBoundingClientRect().left}px`,
            marginTop: `24px`,
            marginLeft:'0'
            
        });

        Setcategory({data:e.target.innerText});
        
        
    }


    return (
        <>
        <div className="nav">
        <div className="options">
            <div className="opt-container">

            {prop.opt.map((opt)=>{
                return (
                    <div key={opt}className="op1"  onClick={optHandler}>{opt}
                    </div>
                );
                
            })}
            </div>
            <div className="line" style={lineStyle}></div>
        </div>
        <div className="settings">&#x205D;</div>
      </div>
      <NewsContainer category={cate.data} pageSize={5} source={""} apiKey={apiCode}/>
      
        </>
    );
}
Newsnav.propTypes = {
    opt : PropTypes.array.isRequired
}
export default Newsnav;