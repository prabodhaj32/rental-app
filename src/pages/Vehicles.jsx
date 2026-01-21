import VehicleCard from '../components/vehicle/VehicleCard';

const vehicles = [
  { id: 1, name: 'Toyota Prius', price: 40 },
  { id: 2, name: 'Honda Civic', price: 35 },
];

export default function Vehicles() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
    </div>
  );
}
