import React, { memo } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';


const EditMemo = memo(FaEdit);
const TrashMemo = memo(FaTrash);


interface ListProps {
  data: { id: string; title: string; }[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}


function List ({ data, editItem, removeItem }: ListProps) {
  return (
    <>
      {!!data.length &&
        <div className="grocery-container">
          {data.map(({ title, id }) => (
            <article className="grocery-item" key={id}>
              <p className="title">{title}</p>
              <div className="btn-container">
                <button onClick={() => editItem(id)} className="edit-btn"><EditMemo /></button>
                <button onClick={() => removeItem(id)} className="delete-btn" ><TrashMemo /></button>
              </div>
            </article>
          ))}
        </div>
      }
    </>
  )
}

export default memo(List);
