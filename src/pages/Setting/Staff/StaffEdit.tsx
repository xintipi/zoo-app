import React from 'react';
import { useParams } from 'react-router-dom';

function StaffEdit() {
  const { id } = useParams();
  return <div>Edit staff {id}</div>;
}

export default StaffEdit;
