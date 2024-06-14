import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import first from './../../image/1.jpeg';
import second from './../../image/2.jpeg';
import third from './../../image/3.jpeg';

function Home() {
        return (
            <>
                <header>
                        <nav>
                            <ul>
                                <li><a href="">sho</a></li>
                                <li><a href="">collection</a></li>
                                <li><a href="">about</a></li>
                                <li><a href="">contact</a></li>
                            </ul>
                        </nav>
                    <div className="logo">
                        <h1>
                            <span>C.P.</span>
                            <span>company</span>
                        </h1>
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                </header>
                <section>
                    <div className="title">
                        <h2>
                            <span className='title_ambony'>new collection</span>
                        </h2>
                        <h2>
                            <span className='title_ambany'>metropolis series</span>
                        </h2>
                    </div>
                    <div className="images">
                        <div className="contenent">
                            <img src={first} alt="" />
                        </div>
                        <div className="contenent">
                            <img src={second} alt="" />
                        </div>
                        <div className="contenent">
                            <img src={third} alt="" />
                        </div>
                    </div>
                </section>
            </>
        );
    }


export default Home;