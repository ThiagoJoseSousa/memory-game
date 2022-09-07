import React, { useEffect, useState } from 'react';

/* will run the effect on mount and whenever the isOn state changes. 
The clean up will be called when currentScore changes and on unmount.
If we don't clear our timeouts/event handlers when the component unmounts, the code in the callback may execute even when the component isn't visible anymore.
It can also lead to memory leaks in your application. Since the timeout is still active after the component unmounts, 
the garbage collector won't collect the component. 

setTimeOut is useful when working with animations */

const Board = ({animes,cardClicked,currentScore})=>{
    const [animate,setAnimate] = useState(false);

    useEffect(()=>{
        setAnimate(true);
        const timer= setTimeout(()=>{
            setAnimate(false)
        }, 500)

        return ()=> clearTimeout(timer)
    },[currentScore]);

    const renderedList = animes.map(anime => {
        return (
            <div className='card'>
            <div className="card__img">
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            </div>
            <div className="card__name">{anime.attributes.canonicalTitle}</div>
            </div>
        )
    })

return <div className='container'>{renderedList}</div>
}

export default Board;