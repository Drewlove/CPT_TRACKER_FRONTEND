import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/addVisit">Add Visit</Link>
      <Link href="/records">Records</Link>
    </NavStyles>
  );
}
