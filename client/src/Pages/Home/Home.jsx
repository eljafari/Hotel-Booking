import Featured from '../../Components/featured/Featured';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import Navbar from '../../Components/NavBar/Navbar';
import './Home.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
            </div>
            <Footer />
        </div>
    )
}
