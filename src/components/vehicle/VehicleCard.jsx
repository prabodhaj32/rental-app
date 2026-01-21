export default function VehicleCard({ vehicle }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{vehicle.name}</h2>
      <p className="text-gray-700">Price: ${vehicle.price}/day</p>
    </div>
  );
}
