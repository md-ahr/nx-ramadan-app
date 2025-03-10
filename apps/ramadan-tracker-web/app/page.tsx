import { formatDate } from '@ramadan-app/utils-date';

export default function Home() {
  console.log(formatDate(new Date(), 'dd/MM/yyyy'));

  return (
    <div className="h-screen grid place-content-center">
      <p className="text-3xl text-rose-500 font-medium">
        Welcome To Ramadan App
      </p>
    </div>
  );
}
