import * as React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

export default function StarWarsNameFunction() {
    const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1});
    const [name, setName] = React.useState(randomName); // Это хук, кста. const [Имя состояния, Апдейтер состояния] = React.useState(Значение состояния);
    const handClick = () => { setName(randomName); };
    return(
        <section >
                <span>{name}</span>
                <div/>
                <button onClick = {handClick}>Мне нужно имя!!!</button>
            </section>
    )
}