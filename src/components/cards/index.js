import React from 'react'
import '../cards/cards.css'
import cat from '../../assets/cat.png'
import like from '../../assets/like.png'


const Cards = () => {
    return (
        <>
            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={cat} className="img-user--post" />
                        <h1 className="style--name--user--card">angelica sarmiento</h1></div>
                    <img src={cat} className="style--img--post" />
                </div>
                <div className="box2--cards">
                    <h1 className="text--cards">Lorem Ipsum is simply dummy text of the
                     printing and typesetting</h1>
                    <div className="container--tags">
                        <h1 className="style--tags">tags</h1>
                        <h1 className="style--tags">tags</h1>
                    </div>

                    <div className="container--likes">
                        <img src={like} className="style--like" />
                        <h1 className="style--text--like">45</h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Cards