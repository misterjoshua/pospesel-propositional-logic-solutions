import Layout from '../components/Layout'
import {
  Alert,
  Col,
  Container,
  Jumbotron,
  Nav,
  Row,
  Table
} from "react-bootstrap";
import React from "react";
import Link from "next/link";

const ExerciseDescription = () => (
  <Alert variant="primary">
    Description of the exercise goes here.
  </Alert>
);

const IndexPage = () => (
  <Layout title="PropLogic Propositional Logic Exercises">
    <Jumbotron>
      <Container>
        <h1>Propositional Logic Exercise Solutions</h1>
        <p>This site is a placeholder for what will eventually become the
          solutions for Howard Pospesel's Propositional Logic book. I am
          currently waiting for permission to publish the exercises.
        </p>
        <p>The text that you see on this page are my solutions and comments on
          the exercises. However, I'd like to show the exercises alongside
          these solutions so that it's clearer.
        </p>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col>
          <h2>Chapter 1 Exercises</h2>
          <p>Chapter one introduces the concepts of logical arguments. It
            discusses both the concepts of argument validity and the the truth
            of statements.</p>

          <section>
            <h3 id="ch1ex1">1. Arguments in the form P & Q therefore P</h3>

            <ExerciseDescription/>

            <Table>
              <thead>
              <tr>
                <th>Combination</th>
                <th>Example</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>True premise, true conclusion</td>
                <td>Obama is a human and he is American<br/>
                  Therefore Obama is American.
                </td>
              </tr>
              <tr>
                <td>False premise, true conclusion</td>
                <td>Donald Trump descends from an ape and he is a woman<br/>
                  Therefore Donald Trump descends from an ape.
                </td>
              </tr>
              <tr>
                <td>False premise, false conclusion</td>
                <td>Hillary is a man and she is the devil,<br/>
                  Therefore Hillary is a man
                </td>
              </tr>
              <tr>
                <td>True premise, false conclusion</td>
                <td>This isn't possible. P & Q therefore P is a valid argument.
                  Because of this, it's not possible for the argument to have a
                  true premise and false conclusion.
                </td>
              </tr>
              </tbody>
            </Table>
          </section>

          <section>
            <h3 id="ch1ex2">2. Arguments in the form P & Q therefore P and
              R</h3>

            <ExerciseDescription/>

            <Table>
              <thead>
              <th>Combination</th>
              <th>Examples</th>
              </thead>
              <tbody>
              <tr>
                <td>True premise, true conclusion</td>
                <td>The sky is blue and we breathe air<br/>
                  Therefore the sky is blue and the moon is far away
                </td>
              </tr>
              <tr>
                <td>False premise and true conclusion</td>
                <td>Dogs are mammals and cats plot to kill us all<br/>
                  Therefore dogs are mammals and we have cats.
                </td>
              </tr>
              <tr>
                <td>False premise and false conclusion</td>
                <td>All cats are black and the Pericles rode rockets<br/>
                  Therefore all cats are black and a person can suffocate
                  breathing pure oxygen.
                </td>
              </tr>
              <tr>
                <td>True premise and false conclusion</td>
                <td>Some cats are black and some Americans are human
                  Therefore some cats are black and the moon is made of cheese.
                </td>
              </tr>
              </tbody>
            </Table>

            <Alert variant="danger">Note: The argument P & Q therefore P & R is
              an invalid argument.</Alert>
          </section>

          <section>
            <h3 id="ch1ex3">3. The ages of three sons</h3>

            <ExerciseDescription/>

            <p>The ages of the kids are 9, 2, and 2. The way the author solves
              this is available near the end of page 145.</p>
          </section>
        </Col>
        <Col xs={3}>
          <Nav className="flex-column">
            <Link href="#ch1ex1" passHref>
              <Nav.Link>1. P & Q therefore P</Nav.Link>
            </Link>
            <Link href="#ch1ex2" passHref>
              <Nav.Link>2. P & Q therefore P & R</Nav.Link>
            </Link>
            <Link href="#ch1ex3" passHref>
              <Nav.Link>3. The ages of the three sons</Nav.Link>
            </Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
