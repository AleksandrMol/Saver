import * as React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
// import styles from './starWarsStyles';

interface IStarWarsNameClassState {
    name: string;
    count: number;
}

export default class StarWarsNameClass extends React.PureComponent <{}, IStarWarsNameClassState>/*<{Объект с пропами}, Интерфейс описывающий состояние>*/{
    state: Readonly<IStarWarsNameClassState> = {name: this.randomName(), count: 0 }; // Это инициализация состояния через перегрузку. Readonly указывать нужно обязательно.
    
    // constructor(props: {}) { // Инициализация состояния через constructor
    //     super(props);

    //     this.state = {name: '123'}; // При использовании constructor, состояния readonly
    // }
    public render(){
        return (
            <section >
                <span>{this.state.name}</span>
                <div/>
                <button onClick = {this.handClick}>Мне нужно имя!!!</button>
            </section>
        );
    }

    private handClick = () => {
        this.setState({name: this.randomName()}) // Функция, обновляющая состояния
        this.setState((state, props) => ({count: state.count + 1}), () => {console.log('>> ', this.state.count )});
    }

    private randomName(): string {
        return uniqueNamesGenerator({dictionaries: [starWars], length: 1});
    }
}