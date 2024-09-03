import JobForm from '../JobForm/JobForm';

const CharacterDetails = ({ selectedCharacter, characters, handleCharacterFormView, handleDeleteCharacter, isJobFormOpen, handleJobFormView, handleAddJob }) => {
    if (!selectedCharacter) return (<section><p>No character selected.</p></section>);
    const completion = selectedCharacter.isStoryComplete ? 'Completed' : 'Incomplete';
    const dutyList = selectedCharacter.dutiesComplete.map(duty => (<li key={duty._id}>{duty.name}</li>));
    const jobList = selectedCharacter.jobs.map(job => (<li key={job._id}>{job.name} - lvl {job.level}</li>));
    const todoList = selectedCharacter.todos.map(todo => (<li key={todo._id}>{todo.text}</li>));

    return (
        <section>
            <h1>{selectedCharacter.name}</h1>
            <h2>{selectedCharacter.datacenter} - {selectedCharacter.world}</h2>
            <p>Story completion: {completion}</p>
            <p>Duties complete:</p>
            <ul>
                {!selectedCharacter.dutiesComplete.length ? 'No duties completed.' : dutyList}
            </ul>
            <p>Jobs:</p>
            {isJobFormOpen ?
                (<JobForm
                    selectedCharacter={selectedCharacter}
                    isJobFormOpen={isJobFormOpen}
                    handleJobFormView={handleJobFormView}
                    handleAddJob={handleAddJob}
                />) :
                (<ul>
                    {!selectedCharacter.jobs.length ? 'No jobs.' : jobList}
                </ul>)}
            <button onClick={handleJobFormView}>
                {isJobFormOpen ? 'Close Form' : 'New Job'}
            </button>
            <p>Todos:</p>
            <ul>
                {!selectedCharacter.todos.length ? 'No todos.' : todoList}
            </ul>
            {characters.some(character => character._id === selectedCharacter._id) && (
                <>
                    <button onClick={() => handleCharacterFormView(selectedCharacter)}>Edit</button>
                    <button onClick={() => handleDeleteCharacter(selectedCharacter._id)}>Delete</button>
                </>
            )}
        </section>
    );
};

export default CharacterDetails;