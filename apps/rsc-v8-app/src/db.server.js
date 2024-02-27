import 'server-only';
const startOfYear = require('date-fns/startOfYear');

const now = new Date();
const startOfThisYear = startOfYear(now);
function randomDateBetween(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const db = [
  {
    id: 0,
    created_at: randomDateBetween(startOfThisYear, now),
    updated_at: now,
    title: 'Meeting Notes',
    body: 'Meeting Notes 0',
  },
  {
    id: 1,
    created_at: randomDateBetween(startOfThisYear, now),
    updated_at: now,
    title: 'Make a thing',
    body: `Meeting Notes 1`,
  },
  {
    id: 2,
    created_at: randomDateBetween(startOfThisYear, now),
    updated_at: now,
    title:
      'More words',
    body: `Meeting Notes 2`,
  },
  {
    id: 3,
    created_at: now,
    updated_at: now,
    title: 'Note today',
    body: 'Meeting Notes 3',
  },
];

let nextId = db.length;

function insertNote(title, body) {
  const now = new Date();
  const note = { id: nextId++, title, body, created_at: now, updated_at: now };
  db.push(note);
  return note;
}

function editNote(id, title, body) {
  const now = new Date();
  const note = findNote(id);
  note.title = title;
  note.body = body;
  note.updated_at = now;
}

function findNote(id) {
  return db.find((note) => note.id == id);
}

function deleteNote(id) {
  const index = db.findIndex((note) => note.id == id);
  if (index > -1) {
    db.splice(index, 1);
  }
}

function searchNotes(text) {
  return db.filter(
    (note) => note.title.includes(text) || note.body.includes(text)
  );
}

module.exports = { db, insertNote, findNote, editNote, deleteNote, searchNotes };
