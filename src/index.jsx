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

function InfoButton(props) {
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

function Page() {
    return (
        <main className="list">
            <Card img='./img/dvor.jpg' name='Дворянское воспитание. Обычаи и традиции' place='Остафьево' date='Идёт сейчас, до: 24.11.2024' src='#'/>
            <Card img='./img/brod.jpg' name='Иосиф Бродский. Место не хуже любого' place='Еврейский музей и центр толерантности' date='Идёт сейчас, до: 12.01.2025' src='#'/>
            <Card img='./img/pastel.jpg' name='Любовь Рыбакова. Солнечная пастель' place='Остафьево' date='Идёт сейчас, до: 12.01.2025' src='#'/>
            <Card img='./img/shagal.jpg' name='В ожидании чуда. Посвящение Марку Шагалу' place='Еврейский музей и центр толерантности' date='Идёт сейчас, до: 12.01.2025' src='#'/>
        </main>
    )
}
  
ReactDOM.render(<Page/>, document.getElementById('app'))