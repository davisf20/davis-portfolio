import Header from '@/app/pageSections/Header';
import { TypingProvider } from './context/typing/TypingProvider';

export default function Home() {
  return (
    <main>
      <TypingProvider>
        <Header />
      </TypingProvider>
    </main>
  );
}
