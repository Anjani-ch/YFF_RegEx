import Challenges from './components/Challenges.js';

const App = _ => {
  const easyChallenges = [];

  const mediumChallenges = [];

  const hardChallenges = [
    {
      desc: 'Create a pattern to match an email',
      testCases: [
        {
          value: 'example@example.com',
          status: 'awaiting-submit'
        },
        {
          value: 'example-example123@example.co.uk',
          status: 'awaiting-submit'
        },
        {
          value: 'example_example12@example.com',
          status: 'awaiting-status'
        }
      ],
    },
  ];

  return (
      <div className='container'>
        <h1 className='text-center border-bottom pb-3 mt-4'>RegEx Challenges</h1>

        <Challenges difficulty="Easy" challenges={easyChallenges} />
        <Challenges difficulty="Medium" challenges={mediumChallenges} />
        <Challenges difficulty="Hard" challenges={hardChallenges} />
      </div>
  );
}

export default App;