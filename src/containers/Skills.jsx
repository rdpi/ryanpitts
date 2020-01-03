import React, { Component } from 'react';
import {
  Container, Col, Row, Progress,
} from 'reactstrap';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      webskills: [
        {
          name: 'JavaScript',
          value: 0,
        },
        {
          name: 'HTML/CSS',
          value: 0,
        },
        {
          name: 'React',
          value: 0,
        },
        {
          name: 'Redux',
          value: 0,
        },
        {
          name: 'Node.js',
          value: 0,
        },
        {
          name: 'Express',
          value: 0,
        },
        {
          name: 'SQL',
          value: 0,
        },
        {
          name: 'MongoDB',
          value: 0,
        },
      ],
      otherskills: [
        {
          name: 'Java',
          value: 0,
        },
        {
          name: 'C',
          value: 0,
        },
        {
          name: 'Python',
          value: 0,
        },
        {
          name: 'Shell Scripting',
          value: 0,
        },
      ]
    };
  }


  async componentDidMount() {
    await new Promise(resolve => setTimeout(resolve, 0));
    this.setState({
      webskills: [
        {
          name: 'JavaScript',
          value: 90,
        },
        {
          name: 'HTML/CSS',
          value: 95,
        },
        {
          name: 'React',
          value: 90,
        },
        {
          name: 'Redux',
          value: 80,
        },
        {
          name: 'Node.js',
          value: 85,
        },
        {
          name: 'Express',
          value: 85,
        },
        {
          name: 'MongoDB',
          value: 70,
        },
        {
          name: 'SQL',
          value: 85,
        },
      ],
      otherskills: [
        {
          name: 'Java',
          value: 60,
        },
        {
          name: 'C',
          value: 70,
        },
        {
          name: 'Python',
          value: 40,
        },
        {
          name: 'Shell Scripting',
          value: 65,
        },
      ]
    });
  }

  render() {
    const { webskills, otherskills } = this.state;
    return (
      <Container>
        <h1 className="text-center text-white">Skills</h1>
        <Row>
          <Col xs="6">
            {webskills.map(skill => (
              <div>
                <Progress color="danger" value={skill.value} className="my-4"><span className="text-left ml-3">{skill.name}</span></Progress>
              </div>
            ))}
          </Col>
          <Col xs="6">
            {otherskills.map(skill => (
              <div>
                <Progress color="danger" value={skill.value} className="my-4"><span className="text-left ml-3">{skill.name}</span></Progress>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
