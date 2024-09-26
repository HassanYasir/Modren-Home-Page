import NewsContainer from './NewsContainer';
import '../App.css'
import PropTypes from 'prop-types';


function Newsnav (prop){
    return (
        <>
        <div className="nav">
        <div className="options">
            {prop.opt.map((opt)=>{
                return (
                    <div key={opt}className="op1">{opt}
                        <div className="line"></div>
                    </div>
                );

            })}
        </div>
      </div>
      <NewsContainer/>
        </>
    );
}
Newsnav.propTypes = {
    opt : PropTypes.array.isRequired
}
export default Newsnav;