import { Tooltip, TooltipProps } from 'antd'

import { ReactComponent as LanguageSVG } from '@/assets/icons/language.svg'

export interface DrawerTooltipProps {
  title?: TooltipProps['title']
  placement?: TooltipProps['placement']
  onClick: (payload: boolean) => void
}

function DrawerTooltip({ title, placement, onClick }: DrawerTooltipProps) {
  const handleOnClick = () => {
    onClick(true)
  }

  return (
    <Tooltip title={title} placement={placement}>
      <LanguageSVG
        data-testid="language-svg"
        className="text-20"
        style={{ cursor: 'pointer' }}
        onClick={handleOnClick}
      />
    </Tooltip>
  )
}

export default DrawerTooltip
