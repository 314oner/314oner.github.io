import data from './data.json';

export default function getEndpoints() {
  return () => ({
    data: data,
  });
}
