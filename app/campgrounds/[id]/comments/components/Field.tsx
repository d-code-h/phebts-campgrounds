import Label from './Label';

export default function Field({ value }: { value?: string }) {
  return (
    <>
      <Label id="comment" label="Comment" />

      <input
        className={`w-full rounded-md text-slate-600 tracking-wider
      border border-purple-200 caret-purple-800 hover:border-purple-500 focus:outline-none focus:border-none focus:ring-2 
              shadow-purple-300 focus:ring-purple-500 mb-3 focus:shadow-lg placeholder:text-sm`}
        id="comment"
        type="text"
        placeholder={`${value ? 'Modify your comment' : 'Add a new comment'}`}
        defaultValue={value}
      />
    </>
  );
}
