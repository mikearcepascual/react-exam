import './App.css'
function Cars(){
    // const [cars, setCars] = useState([])
    const cars = ['Ford', 'BMW','Audi'];

    return(
        <div className='cars'>
            <main className='list'>
                <h1>Who lives in my garage?</h1>
                <ul className='list'>
                    {cars.map((car,id) => {
                        return <li key={id + 1}>
                            I am a {car}
                        </li>
                    }) }
                </ul>
            </main>
        </div>
    )
}

export default Cars;