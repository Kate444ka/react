import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
    const [people, setPeople] = useState(data)

    return (
        <main>
            <section className='container'>
                <h3>{people.length} товарів у вашому кошику</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>Видалити все</button>
            </section>
        </main>
    )
}

export default App
