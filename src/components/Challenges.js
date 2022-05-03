import React from 'react';
import Challenge from './Challenge.js';

const Challenges = ({ challenges, difficulty }) => {
  return (
    <div className='my-5'>
        <h2 className='border-bottom pb-2'>{difficulty}</h2>
        {challenges.map((challenge, index) => {
          return <Challenge key={index} challenge={challenge} />
        })}
    </div>
  )
}

export default Challenges;