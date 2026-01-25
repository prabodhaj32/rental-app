export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
      <p className="text-gray-500 text-sm font-medium">Loading...</p>
    </div>
  );
}
