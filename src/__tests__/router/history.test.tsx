import { fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Link } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { HistoryRouter } from '@/router/history'

const history = createMemoryHistory({ initialEntries: ['/home'] })

const makeSut = () => {
  return render(
    <HistoryRouter history={history}>
      <Link to="/login">
        <button className="button-login">login</button>
      </Link>
    </HistoryRouter>
  )
}

describe('<HistoryRouter />', () => {
  it('should be pushed correct path', () => {
    const { getByText } = makeSut()
    const button = getByText(/login/)

    expect(button).toBeInTheDocument()

    expect(history.location.pathname).toBe('/home')

    fireEvent.click(button)

    expect(history.location.pathname).toBe('/login')
  })
})
