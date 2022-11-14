import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DrawerTooltip, { DrawerTooltipProps } from '@/components/partials/DrawerTooltip'

const makeSut = (props: Partial<DrawerTooltipProps>) => {
  return render(<DrawerTooltip title="Test" placement="topLeft" onClick={vi.fn()} {...props} />)
}

describe('<DrawerTooltip />', () => {
  it('should call onClick successfully', () => {
    const spy = vi.fn()

    const { getByTestId } = makeSut({ onClick: spy })

    fireEvent.click(getByTestId('testLanguageSVG'))

    expect(spy).toHaveBeenCalled()
  })
})
