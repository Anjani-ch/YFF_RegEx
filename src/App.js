import React from 'react';
import { Container } from 'react-bootstrap';
import Challenges from './components/Challenges.js';

const App = _ => {
  const easyChallenges = [
    {
      desc: 'Create a pattern to match the specific string',
      testCases: [
        {
          value: 'Hello, World!',
          status: null,
          expectedResult: true
        },
      ],
    },
  ];

  const mediumChallenges = [
    {
      desc: 'Create a patten to match digits and letters',
      testCases: [
        {
          value: 'hd9h2dh28gd2',
          status: null,
          expectedResult: true,
        },
        {
          value: 'd2dj92hd2hd1',
          status: null,
          expectedResult: true,
        },
        {
          value: 'hd29DIW92dh29',
          status: null,
          expectedResult: true
        },
      ],
    },
  ];

  const hardChallenges = [
    {
      desc: 'Create a pattern to match an email',
      testCases: [
        {
          value: 'example@example.com',
          status: null,
          expectedResult: true
        },
        {
          value: 'example-example123@example.co.uk',
          status: null,
          expectedResult: true
        },
        {
          value: 'example_example12@example.com',
          status: null,
          expectedResult: true
        }
      ],
    },
  ];

  return (
      <Container>
        <h1 className='text-center border-bottom pb-3 mt-4'>RegEx Challenges</h1>

        <Challenges difficulty="Easy" challenges={easyChallenges} />
        <Challenges difficulty="Medium" challenges={mediumChallenges} />
        <Challenges difficulty="Hard" challenges={hardChallenges} />
      </Container>
  );
}

export default App;