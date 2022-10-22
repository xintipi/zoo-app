import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Staff() {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/setting/staff/new')}>New staff</Button>
      <Button onClick={() => navigate('/setting/staff/1/edit')}>Edit staff</Button>
    </div>
  )
}

export default Staff
