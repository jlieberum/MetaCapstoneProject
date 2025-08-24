import Owners1 from './Mario_Adrian1.jpg';
import Owners2 from './Mario_Adrian2.jpg';
import './App.css';

function About() {
  return (
    <>
    <h2>Little Lemon</h2>
    <h3>Chicago</h3>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
    <img src={Owners1} alt='Mario and Adrian are the owners of the Little Lemon Restaurant.' width='276' height='338' />
    <img src={Owners2} alt='Mario and Adrian are the owners of the Little Lemon Restaurant.' width='276' height='338' />
    </>
  );
}

export default About;