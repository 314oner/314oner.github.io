import data from './data.json' assert { type: 'json' };

export default function getEndpoints() {
  return () => ({
    data: data,
  });
}
