import TrollFace from './images/Trollface.png'
import './Header.css';

export default function MemeHeader(){
    return(
        <header id='topHeader'>
            <div id='leftHeader'>
                <img id='trollFace' src={TrollFace} />
                <h2 id="memeTitle">Meme Generator</h2>
            </div>
            <div id='rightHeader'>
                <p id='rightHeaderText'>React course - project 3</p>
            </div>

        </header>
    )
};