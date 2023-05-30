
import { Link } from "react-router-dom";
import imgFond from '../assets/fond2.png';
import '../styles/Homes.css';
function Home() {
    return (
        <>
            <div className="flex">
                <div className='py-40 text1'>
                    <h1 className=" text-4xl font-bold text-gray-800">Enregistrez votre voiture en toute simplicité : Notre service en ligne vous facilite la vie</h1>
                    <p className="text-xl font-medium py-5">Évitez les files dattente et la paperasse en utilisant notre service convivial qui vous permet de faire les démarches en quelques clics. Gagnez du temps précieux et profitez dun processus denregistrement simplifié, vous permettant de mettre rapidement votre voiture en règle. Simplifiez votre vie et enregistrez votre voiture en ligne dès aujourdhui </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link
                            to='/Form'
                        >
                            Commencer
                        </Link>

                    </button>
                </div>

                <div className="flex-none">
                    <img src={imgFond} alt="Votre image" className=" fond2 h-full" />
                </div>
            </div>

        </>
    );

}

export default Home;