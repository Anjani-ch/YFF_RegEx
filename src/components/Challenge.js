import React, { useState } from 'react';

import { ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Challenge = ({ challenge }) => {
  const [hasError, setHasError] = useState(false);
  const [testCases, setTestCases] = useState(challenge.testCases);

  const handleSubmit = e => {
    e.preventDefault();

    const inputElement = e.target['regex-input'];

    try {
      const input = inputElement.value.split('/');
      const regexInput = input[1];
      const flags = input[2].split('');

      if(!regexInput) throw new Error('Regex cannot be empty');

      const regex = new RegExp(regexInput, flags);

      setTestCases(
        testCases.map(testCase => {
          const match = testCase.value.match(regex);
          let updatedStatus;
        
          if(((match && match[0] === match.input)) === testCase.expectedResult) {
            updatedStatus = 'pass';
          } else {
            updatedStatus = 'fail';
          }

          return {
            value: testCase.value,
            status: updatedStatus,
            expectedResult: testCase.expectedResult
          };
        })
      );
    } catch (err) {
      setHasError(true);

      setTestCases(
        testCases.map(testCase => {
          return {
            value: testCase.value,
            status: null
          };
        })
      );

      inputElement.value = '';
    }
  };

  const reset = e => {
    if(hasError && e.target.value) {
      setHasError(false);
    }
  };

  return (
    <div className='border-bottom'>
      <h5 className='mb-3'>{challenge.desc}</h5>
      <h6>Test Cases:</h6>

      <ListGroup>
        {testCases.map((testCase, index) => {
          return <ListGroup.Item key={index} className={testCase.status === 'pass' ? 'bg-success text-light' : testCase.status === 'fail' ? 'bg-danger text-light' : ''}>{testCase.value}</ListGroup.Item>
        })}
      </ListGroup>

      <div className='mt-4'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter your expression here:</Form.Label>
            <Form.Control onKeyUp={reset} type='text' name='regex-input' placeholder='Regular Expression' />
            <Form.Label className={`text-danger ${hasError ? 'd-block' : 'd-none'}`}>Invalid Input</Form.Label>
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-2 mb-3'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Challenge;