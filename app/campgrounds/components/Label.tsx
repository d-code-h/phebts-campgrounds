export default function Label({ id, label }: { id: string; label: string }) {
  return (
    <label
      className={`text-lg font-serif font-medium ${
        id === 'price' && 'flex-none'
      }`}
      htmlFor={id}
    >
      {label}:{' '}
    </label>
  );
}
