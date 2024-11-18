import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';
import { Link } from '@material-ui/core';

const MyWork = () => {
  return (
    <>
      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My latest Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => {
            return (
              <a key={index} style={{ textDecoration: 'none' }} href={work.pro}>
                <img src={work.w_img} alt={work.title} />
                <div className="overlay">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </a>
            );
          })}
        </div>
          <Link style={{"textDecoration":"none"}} href='https://github.com/TechnoiVish?tab=repositories' target='_blank'>
        <div className="mywork-showmore">
          
          <p>
            Show more
          </p>
          <img src={arrow_icon} height={22} width={22} alt="" />
        </div>
          </Link>
      </div>
    </>
  );
}

export default MyWork;
