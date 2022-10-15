import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Result
      status="404"
      title={t('error:title_404')}
      subTitle={t('error:404')}
      extra={
        <Button type="primary" size="large" onClick={() => navigate('/')}>
          {t('error:back_dashboard')}
        </Button>
      }
    />
  );
}

export default Error404;
