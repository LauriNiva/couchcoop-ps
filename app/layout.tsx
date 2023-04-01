import './globals.css';
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
});

export const metadata = {
  title: 'Playstation Couch Coop',
  description: 'List of couchcoop games for PS4 and PS5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className}`}>
        <header className="flex justify-between p-2 fixed w-full top-0 z-50 bg-black">
          <h1 className="text-5xl font-bold ">CouchCoop-PS</h1>
          <nav>
            <ul className="flex flex-row h-full">
              <li className="mr-3 self-end">Games</li>
              <li className="mr-3 self-end">Sale</li>
              <li className="mr-3 self-end">About</li>
            </ul>
          </nav>
        </header>
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
