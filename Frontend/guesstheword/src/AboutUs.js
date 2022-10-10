import './AboutUs.css';
import Header from './Header';
import Footer from './Footer';
function AboutUs(){
    return (

   <div><Header/>
        <div className="aboutBody">

            <div className="textBody">
            A guess (or an act of guessing) is a swift conclusion drawn from data directly at hand,<br/>
             and held as probable or tentative, while the person making the guess (the guesser) <br/>
             admittedly lacks material for a greater degree of certainty. A guess is also an unstable answer<br/>
             , as it is "always putative, fallible, open to further revision and interpretation, and validated <br/>
             against the horizon of possible meanings by showing that one interpretation is more probable than another in <br/>
             light of what we already know". In many of its uses, "the meaning of guessing is assumed as implicitly understood",<br/>
              and the term is therefore often used without being meticulously defined. Guessing may combine elements of deduction, induction, abduction, and the purely random selection of one choice from a set of given options. Guessing may also involve the intuition of the guesser,<br/>
              who may have a "gut feeling" about which answer is correct without necessarily being able to articulate a reason for having this feeling.<br/>
            </div>


            <footer className="footerp">
         <p className="text-footerp">
             Terms Of Use | Privacy
         </p>
     </footer>
        </div>

        
        </div>

    );
}
export default AboutUs