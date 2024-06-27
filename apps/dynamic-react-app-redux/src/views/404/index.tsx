import Button from '@/components/common/Button';
import { useTitle } from '@/hooks';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useTitle('Not found');
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl p-3 mx-auto my-auto text-center">
        <h1 className="text-xl">Страница не найдена</h1>
        <Link to={'/'} className={'link'}>
          <Button text={'Вернуться на главную'} />
        </Link>
      </div>
    </div>
  );
}
