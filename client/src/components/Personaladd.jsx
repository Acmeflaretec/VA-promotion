import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ads = [
  {
    id: 1,
    content: "Personal ad 1",
  },
  {
    id: 2,
    content: "Personal ad 2",
  },
  {
    id: 3,
    content: "Personal ad 3",
  },
];

function Personaladd() {
  return (
    <Row>
      {ads.map(ad => (
        <Col md={4} key={ad.id}>
        <div className='bg-black p-5 text-white mb-3 mt-5 text-center'> 
             {ad.content}
        </div>
        </Col>
      ))}
    </Row>
  );
}

export default Personaladd;
