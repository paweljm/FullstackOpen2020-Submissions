const Persons = ({persons, search, deleteHandler}) => {
return(   
    persons
    ?.filter( person => (
        (person.name).toLowerCase()).includes(search))
    .map(person =>
        <div key={person.name}>
            <span>{person.name} {person.number}</span>
            <button onClick={() => deleteHandler(person.id, person.name)} >delete</button>
        </div>
        )
    )
}

export default Persons