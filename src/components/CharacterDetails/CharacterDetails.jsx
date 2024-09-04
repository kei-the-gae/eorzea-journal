import JobForm from '../JobForm/JobForm';

const CharacterDetails = ({ selectedCharacter, selectedJob, characters, handleCharacterFormView, handleDeleteCharacter, isJobFormOpen, handleJobFormView, handleAddJob, handleUpdateJob }) => {
    if (!selectedCharacter) return (<section><p>No character selected.</p></section>);
    const completion = selectedCharacter.isStoryComplete ? 'Completed' : 'Incomplete';
    const dutyList = selectedCharacter.dutiesComplete.map(duty => (<li key={duty._id}>{duty.name}</li>));
    const jobList = selectedCharacter.jobs.map(job => (<li key={job && job._id}>
        {job && job.name} - lvl {job && job.level}
        <button onClick={() => handleJobFormView(job)}>
            Edit Job
        </button> </li>));
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
                    selectedJob={selectedJob}
                    isJobFormOpen={isJobFormOpen}
                    handleJobFormView={handleJobFormView}
                    handleAddJob={handleAddJob}
                    handleUpdateJob={handleUpdateJob}
                />) :
                (<ul>
                    {!selectedCharacter.jobs.length ? 'No jobs.' : jobList}
                </ul>)}
            <button onClick={() => handleJobFormView()}>
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