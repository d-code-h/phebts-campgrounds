export default function FormButton({ state }: { state: string }) {
  return (
    <button
      className="ring-1 ring-purple-500 rounded-md px-2 py-1 text-xl text-purple-500 font-semibold tracking-wide hover:bg-purple-500 hover:text-white hover:shadow-xl focus:outline-none focus:bg-purple-500 focus:text-white focus:shadow-xl block mt-3 mx-auto"
      type="submit"
    >
      {state === 'new' ? 'Add' : 'Update'}
    </button>
  );
}
