import './home.css';
import { HomeSocial } from './homeSocial';
import DonImg from "../img/Donaldprofile.jpg";

function Home() {
    return (
        <div className="homeContainer">
        <div className="homeBox">
            <h1 className='homeTitle'>Donald Bowler</h1>
            <h2 className='homeTitleTwo'>Full-Stack Developer</h2>
            <div className='bodyStyle'>
                <p className='p1'>Studied Computer Science at</p>
                <p className='p2'>University of San Antonio </p>
                <p className='p3'>Aspiring Web Developer</p>
                <p className='p4'> Army Veteran</p>
                <p className='p5'> Cars and Motorcycles Lover </p>
                <p className='p6'> Movie Enthusiast</p>
                <p className='p7'> Lover of Slowed and Reverbed music</p>
                <p className='p8'> Music by Karl Casey @ White Bat Audio</p>
                </div>
                <div className='homeSocial'>
                    {
                        HomeSocial && HomeSocial.map((social) => (
                            <a href={social.iconLink} key ={social.id}>
                                {social.iconName}
                            </a>
                        ))
                    }
                </div>
                <div className='homeImg'>
                    <img src={DonImg} alt="" className="profileImg" />
                </div>
        </div>
    </div>
    );
}

export default Home;