import { redirect } from 'next/navigation';

export default function ServerComponent() {
  redirect('/home');

  return; 
}
