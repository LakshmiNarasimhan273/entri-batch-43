import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { deleteNote } from '../redux/notesSlice';

function NotesList() {
  const notes = useSelector(state => state.entrinotes.notes);
  console.log(notes);

  const dispatch = useDispatch();

  if(notes.length === 0){
    return (
      <div className='text-center mt-20'>
        <h2 className='text-xl font-semibold text-gray-500'>Notes looks Empty</h2>
        <p className='text-gray-400 mt-2'>Start by adding your first note</p>
      </div>
    )
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
      {
        notes.map(data => (
          <div className='bg-gray-100 rounded-xl p-6 shadow-md' key={data.id}>
            <h3 className='text-lg font-bold text-gray-800'>{data.title}</h3>
            <p className='text-gray-600 text-sm mt-3'>{data.description}</p>
            <p className='text-gray-400 text-sm mt-2'>Created At: {new Date(data.id).toLocaleString()}</p>
            <div className='flex items-center justify-between mt-6'>
              <span className='text-xs font-medium bg-purple-600 text-white px-3 py-1 rounded-full'>{data.category}</span>

              <button onClick={() => dispatch(deleteNote(data.id))} className='text-sm bg-red-100 text-red-600 px-3 py-1 rounded-lg cursor-pointer'>Delete Note</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default NotesList