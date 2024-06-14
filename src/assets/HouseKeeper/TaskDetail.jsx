  // src/assets/HouseKeeper/TaskDetail.jsx
  import * as React from 'react';
  import { useLocation } from 'react-router-dom';
  import './StyleTaskDetails.css';
  import TopNavBar from '../Components/TopNavBar';
  import PropTypes from 'prop-types';

  function TaskDetails({ task }) { 
    return ( 
      <div className="task-details-section"> 
        <div className="task-details-header"> 
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5775bbcca661563ccea056839f18fa60e56560d3fd35caf347c08fa3577586fe?apiKey=433434157f134a548d8a823886c69352&" className="task-image" alt="Task icon" /> 
          <h2 className="task-title">Task details</h2> 
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acec8209277994595a8242db5656510205d284f34d015615b877fc8f466ac57?apiKey=433434157f134a548d8a823886c69352&" className="task-image" alt="" /> 
        </div> 
        <div className="task-detail-content">
          <p><strong>Time:</strong> {task.time}</p>
          <p><strong>Number:</strong> {task.number}</p>
          <p><strong>Description:</strong> {task.description}</p>
        </div>
      </div>
    ); 
  }

  function CostDetails({ task }) { 
    const handlePrint = () => {
      window.print();
    };
    return ( 
      <section className="cost-details-section"> 
        <div className="cost-details-header"> 
          <div className="cost-amount">{task.number}</div> 
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=433434157f134a548d8a823886c69352&" className="cost-image" alt="Cost icon" /> 
        </div> 
        <div className="extra-requirements"> 
          <p className="requirement-description">{task.description}</p> 
        </div> 
        <div className="total-cost-section"> 
          <p className="total-cost">Total cost: 0</p> 
          <div className="time-details"> 
            <p className="request-time"> 
              <span className="time-label"> Time of request: </span> 
              <span className="time-value"> {task.time} </span> 
            </p> 
          </div> 
          <div className="actions"> 
          <button className="action-button" onClick={handlePrint}>
            Print
          </button>
            <button className="action-button">Reassign</button> 
          </div> 
        </div> 
      </section> 
    ); 
  }

  function TaskDetail({hamburger}) { 
    const location = useLocation();
    const { task } = location.state;

    return ( 
      <main className="main-container"> 
        <TopNavBar name="Task Details" hamburger={hamburger}/> 
        {/* <TaskDetails task={task} />  */}
        <CostDetails task={task} /> 
      </main> 
    ); 
  } 

  TaskDetails.propTypes = {
    task: PropTypes.shape({
      time: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  TaskDetails.defaultProps = {
    task: {
      time: "",
      number: "",
      description: "",
    },
  };

  export default TaskDetail;
