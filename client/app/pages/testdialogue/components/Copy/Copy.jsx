import React from 'react';
import copy from "@/assets/images/copy.png";
// import Retry from "@/assets/images/retry.png";
import './index.less';

const Copy = (props) => {
  const { sender ,source} = props;
  const copyCentent = () => {
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', source);
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 9999);
    if (document.execCommand('copy')) {
      document.execCommand('copy');
    }
    document.body.removeChild(input);
  }
  // const retryCentent = () => {
  //   retry(index)
  // }
  return (
    
    <div className={`copy${sender}`}>
        <div className="copt-item" onClick={copyCentent}>
            <img src={copy} alt="" />
            <div className="copy-text">{window.W_L.copy}</div>
        </div>
        {/* {
            sender=="bot"?
            <div className="copt-item" onClick={retryCentent}>
            <img src={Retry} alt="" />
            <div className="copy-text">{window.W_L.retry}</div>
        </div>
        :
        null
        } */}
    </div>
  );
};

export default Copy;