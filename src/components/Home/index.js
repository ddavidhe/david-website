import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm David He
                <br/>
                UW Student
                </h1>
                <h2> gacha addict, aspiring programmer, sock matcher</h2>
                <Link to="/contact" className="flat-button"> CONTACT ME </Link>
            </div>

        </div>

    );

}

export default Home