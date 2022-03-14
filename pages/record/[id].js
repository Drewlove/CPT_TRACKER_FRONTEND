import SingleRecord from '../../components/SingleRecord';

// export default function SingleRecordPage() {
//   return <SingleRecord />;
// }
export default function SingleRecordPage({ query }) {
  return <SingleRecord id={query.id} />;
}
