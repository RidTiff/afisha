function ImageCard(props) {
    return (
        <img className='card__img' src={props.src}/>
    )
}

function EventName(props) {
    return (
        <h3 className='card__name'>{props.children}</h3>
    )
}

function Place(props) {
    return (
        <p className='card__place'>{props.children}</p>
    )
}

function Date(props) {
    return (
        <p className='card__date'>{props.children}</p>
    )
}

function InfoButton() {
    return (
        <a src={props.src}>Подробнее</a>
    )
}

function Card(props) {
    return (
    <section className='card'>
        <ImageCard src={props.img}></ImageCard>
        <EventName>{props.name}</EventName>
        <Place>{props.place}</Place>
        <Date>{props.date}</Date>
        <InfoButton src={props.src}></InfoButton>
    </section>)
}

  
ReactDOM.render(<Card img='../img/card__img.jpg' name='Дворянское воспитание. Обычаи и традиции' place='Остафьево' date='Идёт сейчас, до: 24.11.2024' src='#'/>, document.getElementById('app'))