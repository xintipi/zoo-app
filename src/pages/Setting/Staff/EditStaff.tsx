import React from 'react';
import { useParams } from 'react-router-dom';

function EditStaff() {
  const { id } = useParams();
  return <div>Edit staff {id}</div>;
}

export default EditStaff;
