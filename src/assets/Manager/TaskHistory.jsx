import * as React from 'react';
import './StyleTaskHistory.css';
import TopNavBar from "../Components/TopNavBar";


const TaskItem = ({ roomNumber, taskDescription, taskTime }) => (
  <div className="task-item">
    <div className="room-number">{roomNumber}</div>
    <div className="task-description">{taskDescription}</div>
    <div className="task-time">{taskTime}</div>
  </div>
);

function TaskHistoryManager() {
  const tasks = [
    { roomNumber: '123', taskDescription: 'Write blog post for demo day', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Publish blog page', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Add gradients to design system', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Publish blog page', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Responsive behavior doesn’t work on Android', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Confirmation states not rendering properly', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Revise copy on the About page', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Text wrapping is awkward on older iPhones', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Publish HackerNews post', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Review image licensing for header section images', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Revise copy on the About page', taskTime: '3:40 pm' },
    { roomNumber: '123', taskDescription: 'Accessibility focused state for input fields', taskTime: '3:40 pm' },
  ];

  return (
    <section className="task-history">
      {/* <header className="header">
        <div className="title-container">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dab220df466421b05722e85d455b0d18241a1fd94384018c31531407dbff7e90?apiKey=433434157f134a548d8a823886c69352&" className="header-icon" alt="" />
          <h1 className="title">Task history</h1>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda1767f39039bb58caf298010157b21a995ef90a4bb03fb215be599bd07526c?apiKey=433434157f134a548d8a823886c69352&" className="header-icon" alt="" />
        </div>
      </header> */}
      <TopNavBar name = "Task History" hamburger="manager"/>
      <div className="search-container">
        <div className="search-bar">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c193da1201903f8e04b5129e99905ac2c6b3d2a5a84921094bcaf7282591cfc?apiKey=433434157f134a548d8a823886c69352&" className="search-icon" alt="" />
          <input type="text" className="search-input" aria-label="Search" placeholder="Search" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6dfd6b3dc146101e488c2b57af1c4665f83952f51ddd3ed045e67a7ceabfb56?apiKey=433434157f134a548d8a823886c69352&" className="add-icon" alt="Add Task" />
      </div>
      <main className="task-list">
        <header className="tasks-header">
          <div className="column-title">Room</div>
          <div className="column-title">Task</div>
          <div className="column-title">Time</div>
          <div className="column-title">Assigned to</div>
          <div className="column-title">Status</div>
        </header>
        {tasks.map((task, index) => (
          <TaskItem key={index} roomNumber={task.roomNumber} taskDescription={task.taskDescription} taskTime={task.taskTime} />
        ))}
      </main>
    </section>
  );
}

export default TaskHistoryManager;
