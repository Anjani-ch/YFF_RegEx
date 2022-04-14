import { useState } from 'react';

import { ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Challenge = ({ challenge }) => {
  const [listBackground, setlistBackground] = useState(null);
  const [listColor, setListColor] = useState(null);
  const [testCases, setTestCases] = useState(challenge.testCases);
  const [regex, setRegex] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const input = e.target['regex-input'].value;

    console.log(input);
  };

  return (
    <div className='border-bottom'>
      <h5 className='mb-3'>{challenge.desc}</h5>
      <h6>Test Cases:</h6>

      <ListGroup>
        {testCases.map((testCase, index) => {
          return <ListGroup.Item key={index} className={`${listBackground} ${listColor}`}>{testCase.value}</ListGroup.Item>
        })}
      </ListGroup>

      <div className='mt-4'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter your expression here:</Form.Label>
            <Form.Control type='text' name='regex-input' placeholder='Regular Expression' />
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-2 mb-3'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Challenge;