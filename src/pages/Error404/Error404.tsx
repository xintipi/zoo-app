import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Error404() {
  const { t } = useTranslation();

  return (
    <Result
      status="404"
      title={t('error:title_404')}
      subTitle={t('error:404')}
      extra={
        <Link to="/dashboard">
          <Button type="primary" size="large">
            {t('error:back_dashboard')}
          </Button>
        </Link>
      }
    />
  );
}

export default Error404;
