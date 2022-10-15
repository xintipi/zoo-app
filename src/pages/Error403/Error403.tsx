import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Error403() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Result
      status="403"
      title={t('error:title_403')}
      subTitle={t('error:403')}
      extra={
        <Button type="primary" size="large" onClick={() => navigate('/')}>
          {t('error:back_dashboard')}
        </Button>
      }
    />
  );
}

export default Error403;
