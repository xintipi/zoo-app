import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Error500() {
  const { t } = useTranslation()

  return (
    <Result
      status="500"
      title={t('error:title_500')}
      subTitle={t('error:500')}
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

export default Error500
