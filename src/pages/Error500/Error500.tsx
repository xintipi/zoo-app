import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Error500() {
  const { t } = useTranslation()

  return (
    <Result
      className="result-page"
      status="500"
      title={t<string>('error:title_500')}
      subTitle={t<string>('error:500')}
      extra={
        <Link to="/dashboard">
          <Button type="primary" size="large">
            {t<string>('error:back_dashboard')}
          </Button>
        </Link>
      }
    />
  )
}

export default Error500
