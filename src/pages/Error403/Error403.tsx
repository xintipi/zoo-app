import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Error403() {
  const { t } = useTranslation()

  return (
    <Result
      status="403"
      title={t('error:title_403')}
      subTitle={t('error:403')}
      extra={
        <Link to="/dashboard">
          <Button type="primary" size="large">
            {t('error:back_dashboard')}
          </Button>
        </Link>
      }
    />
  )
}

export default Error403
