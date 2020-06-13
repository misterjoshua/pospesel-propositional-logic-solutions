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
        <h1>Propositional Logic Proofs</h1>
        <p>This site is a placeholder for what is to become a reference for
          common logical relationships arising from the use of Howard Pospesel's
          propositional logic system.
        </p>
        <p>The text that you see throughout this site are my proofs, mixed
          with my commentary on the details. I have several intentions:
        </p>
        <ul>
          <li>To introduce interested parties to Howard Pospesel's logical
            system.
          </li>
          <li>To produce a reference for students who are working through the
            book without a course.
          </li>
          <li>To provide proof for all of the derived rules that the book
            engenders.
          </li>
        </ul>
      </Container>
    </Jumbotron>

    <Container>
      <Row>
        <Col>
          <h2>Notes on Logic</h2>
          <ul>
            <li>An argument has form and content.</li>
            <li>An argument's form is what determines validity.</li>
            <li>It's not valid to speak of an argument as being true or false.
            </li>
            <li>Arguments are composed of statements which are the content of the argument.</li>
            <li>The statements can be true or false, but not valid/invalid.</li>
            <li>The only requirement for an argument to be valid is: It must be impossible for
              the argument to have a true premise and false conclusion.</li>
          </ul>

          <section>
            <h3 id="ch1ex1">1. Arguments in the form P & Q therefore P</h3>
            <ul>
              <li>This is a valid argument.</li>
              <li>We can create all combinations of true or false premises and true or false conclusion, but not a true premise and false conclusion.</li>
            </ul>

            <p>The following table contains all combinations of premises and conclusions with examples:</p>

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
                <td>This isn't possible. It's straining to think of an example
                  because it's impossible to. P & Q therefore P is a valid
                  argument. And because of this, it's not possible for the
                  argument to have a true premise and false conclusion.
                </td>
              </tr>
              </tbody>
            </Table>
          </section>

          <section>
            <h3 id="ch1ex2">2. Arguments in the form P & Q therefore P and R</h3>

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
