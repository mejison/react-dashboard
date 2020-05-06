import React from 'react';
// import Timer from "./Timer";
import Avatar from './Avatar';
const BottomFooter = ({  }) => {  
  return (
    <div className="bottom-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-between">
            <div className="footer-title">
              <h2>Predicted Impact</h2>
            </div>
            <div className="scores">
              <div className="score">
                <div className="label">
                  Total revenue
                </div>
                <div className="rate up">
                  12 %
                </div>
                <div className="price">
                  13 6990,32 €
                </div>
              </div>
              <div className="score">
                <div className="label">
                  Total Tickets
                </div>
                <div className="rate down">
                  2 %
                </div>
                <div className="price">
                  1200.50
                </div>
              </div>
              <div className="score">
                <div className="label">
                  Overall ATP
                </div>
                <div className="rate up">
                  2 %
                </div>
                <div className="price">
                132,50 €
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
