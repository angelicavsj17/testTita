import React, {useState} from 'react'
import '../cards/cards.css'
import cat from '../../assets/gato.png'
import like from '../../assets/like.png'
import user from '../../assets/user.png'
import Modal from '../modal'

const Cards = () => {

const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button onClick={() => {setOpenModal(true)}}>comentarios</button>
                     {openModal && <Modal closeModal={setOpenModal}/>}
                </div>

            </div>


            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button className="links--coments--cards">COMENTARIOS</button>
                </div>

            </div>




            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>





            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>





            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>




            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>




            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>





            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>




            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>





            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>




            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button>comentarios</button>
                </div>

            </div>

            <div className="container--cards">
                <div className="box1--cards--post">
                    <div className="container--user--data--post">
                        <img src={user} className="img-user--post" />
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
                     <button className="links--coments--cards">COMENTARIOS</button>
                </div>

            </div>
        </>
    )
}

export default Cards
