import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";

// FUNCTION
function App() {

	// USESTATE
	const [notes, setNotes] = useState(
		localStorage.notes ? JSON.parse(localStorage.notes) : []
	);

	const [activeNote, setActiveNote] = useState(false);

	// USEEFFECT
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);
	
	// ONADDNOTE
	const onAddNote = () => {
		const newNote = {
			id: uuid(),
			title: "Untitled Note",
			body: "",
			lastModified: Date.now(),
		};

		setNotes([newNote, ...notes]);
		setActiveNote(newNote.id);
	};

	// ONDELETENOTE
	const onDeleteNote = (noteId) => {
		setNotes(notes.filter(({ id }) => id !== noteId));
	};

	// ONUPDATENOTE
	const onUpdateNote = (updatedNote) => {
		const updatedNotesArr = notes.map((note) => {
			if (note.id === updatedNote.id) {
				return updatedNote;
			}

			return note;
		});

		setNotes(updatedNotesArr);
	};

	// GETACTIVENOTE
	const getactiveNote = () => {
		return notes.find(({ id }) => id === activeNote);
	};

	return (
		<div className="App">
			<Sidebar
				notes={notes}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>
			<Main activeNote={getactiveNote() } onUpdateNote= {onUpdateNote} />
		</div>
	);
}

export default App;