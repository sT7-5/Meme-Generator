import './MainArea.css';
import React from 'react';


/* state is like the variables the function declares within itself and changes.
State is the values managed by the component itself */
export default function MainArea(){



    let tempMeme = {
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    };


    const [meme, func] = React.useState(tempMeme)
    const [allTheMemes, changeAllMemes] = React.useState([]);


    let url = "";

    function getRandomMeme(){
        let randomChoice = Math.floor(Math.random() * allTheMemes.length);
        url = allTheMemes[randomChoice].url;
       
        func(prevMeme => ({
            ...prevMeme,
            randomImage:url,
        }))
        
    }


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => changeAllMemes(data.data.memes))
        console.log("used")
    }, [])//dependancy array is empty so useEffect doesn't depend on any value... will only run once

    console.log(allTheMemes);

    function handleChange(event){
        const {name, value, type} = event.target;
        func(prevMeme =>{
            return(
                {
                    ...prevMeme,
                    [name]: value
                }
            )
        })
    }


    return(



        <div>
            <div id='theMainArea'>
                <div id='memeInputs'>
                    <input 
                        name='topText' 
                        id='memeInputLeft' 
                        type='text' 
                        placeholder='First Text'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                
                    <input 
                        name='bottomText' 
                        id='memeInputRight' 
                        type='text' 
                        placeholder='Second Text'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />

                    <button onClick={getRandomMeme} id='getMemeButton'>Get a new meme image 🖼️</button>

                    <div className='memeArea'>
                        <h2 className='memeText'>{meme.topText}</h2>
                        <img id='memeImg' src={meme.randomImage} ></img>
                        <h2 className='memeText'>{meme.bottomText}</h2>


                    </div>
                </div>

            </div>


        </div>
    )
}



