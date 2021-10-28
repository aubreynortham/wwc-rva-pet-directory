import Francis from './pics/francis.png';
import Meechum from './pics/meechum.png';
import Harold from './pics/harold.jpg';
import Relish from './pics/relish.png';
import Bakancito from './pics/bakancito.png';
import Chai from './pics/chai.png';
import Gobby from './pics/gobby.jpg';

import './PetList.css';

// HI CONTRIBUTORS: Add any and all pet bios as new <li> elements within the <ul> below

function PetList() {
  return (
    <ul className="pet-list">
      <li className="pet-list-item">
        <img className="pet-pic" src={Meechum} alt='gray cat inspecting twig' />
        <div>
          <p className="pet-name">
            Meechum
          </p>
          <p className="pet-title">
            Senior Amazon Delivery Box Inspector
          </p>
          <ul>
            <li>Excellent customer service skills</li>
            <li>If he fits, he will sits</li>
            <li>Very punctual and attentive (if food is involved)</li>
          </ul>
        </div>
      </li>
      <li className="pet-list-item francis">
        <img className="pet-pic" src={Francis} alt='light orange cat sitting on keyboard' />
        <div>
          <p className="pet-name">
            Francis
          </p>
          <p className="pet-title">
            Regional Keyboard Warming Specialist
          </p>
          <p>
            Words to live by:
          </p>
          <figure>
            <blockquote>
              "I don't need permission, make my own decisions. That's my prerogative."
            </blockquote>
            <figcaption>- Britney Spears</figcaption>
          </figure>
        </div>
      </li>
      <li className="pet-list-item relish">
        <img className="pet-pic" src={Relish} alt='black dog' />
        <div>
          <p className="pet-name">
            Relish
          </p>
          <p className="pet-title">
            CEO (Chief Ears Officer)
          </p>
          <p>
            Fun Facts:
          </p>
          <ul>
            <li>Self-appointed head of squirrel patrol</li>
            <li>Hears all office gossip, tolerates none of it</li>
            <li>Cries when the boss leaves her home alone</li>
          </ul>
        </div>
      </li>
      <li className="pet-list-item bakancito">
        <img className="pet-pic" src={Bakancito} alt='sleepy orange and white cat' />
        <div>
          <p className="pet-name">
            Bakancito
          </p>
          <p className="pet-title">
            VP of Napping
          </p>
          <p>
            Fun Facts:
          </p>
          <ul>
            <li>Enjoys pair programming</li>
            <li>Enthusiastic laptop bag warmer</li>
            <li>Dedicated office snack tester</li>
          </ul>
        </div> 
      </li>
      <li className="pet-list-item chai">
        <img className="pet-pic" src={Chai} alt='judgmental calico on windowsill' />
        <div>
          <p className="pet-name">
            Chai
          </p>
          <p className="pet-title">
            10x Window Monitor
          </p>
          <p>
            Fun Facts:
          </p>
          <ul className="pet-list-chai">
            <li>Office sustainability evangelist (solar-powered)</li>
            <li>Will work for ear rubs</li>
            <li>Will work even harder for tuna</li>
          </ul>
        </div>
      </li>
      <li className="pet-list-item harold">
        <img className="pet-pic" src={Harold} alt='an old shepherd dog with his eyes closed and a flower booping him on the head' />
        <div>
          <p className="pet-name">
            Harold
          </p>
          <p className="pet-title">
            Senior Gardener
          </p>
          <p>
            Words to live by:
          </p>
          <figure>
            <blockquote>
              "What is a weed? A plant whose virtues have never been discovered."
            </blockquote>
            <figcaption>- Ralph Waldo Emerson</figcaption>
          </figure>
        </div>
      </li>
      <li className="pet-list-item gobby">
        <img className="gobby pet-pic" src={Gobby} alt='a brown pitbull snuggled in blankets so only his eyes and ears are showing' />
        <div>
          <p className="pet-name">
            Gobby
          </p>
          <p className="pet-title">
            Goblindo the Lindo Goblin
          </p>
          <p>
            Words to live by:
          </p>
          <figure>
             <blockquote>
              "Big time sleeper, small time creeper. The ears of a bat, the body of a capybara, this absolute unit is disrupting the sleep industry with his premium nest making skills."
             </blockquote>
            <figcaption>- Inventor of the Snuggie</figcaption>
          </figure>
        </div>
      </li>
    </ul>
  );
}

export default PetList;
