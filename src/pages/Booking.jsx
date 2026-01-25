import { useState } from "react";
import { MapPin, Calendar, User, CreditCard, Zap, Shield, Phone, Check, AlertCircle } from "lucide-react";

export default function BookingForm() {
  // Form state
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    fullName: '',
    phone: '',
    email: ''
  });
  
  const [addons, setAddons] = useState({
    driver: false,
    insurance: false,
    gps: false,
    childSeat: false
  });
  
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Calculate pricing
  const baseRate = 150;
  const deposit = 200;
  const addonPrices = {
    driver: 50,
    insurance: 30,
    gps: 10,
    childSeat: 15
  };
  
  const addonTotal = Object.entries(addons).reduce((total, [key, value]) => {
    return total + (value ? addonPrices[key] : 0);
  }, 0);
  
  const total = baseRate + deposit + addonTotal;
  
  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  const handleAddonChange = (addon) => {
    setAddons(prev => ({ ...prev, [addon]: !prev[addon] }));
  };
  
  // Validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.dropoffLocation) newErrors.dropoffLocation = 'Drop-off location is required';
    if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return date is required';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!termsAccepted) newErrors.terms = 'You must accept the terms';
    
    // Date validation
    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate);
      const returnDate = new Date(formData.returnDate);
      if (returnDate <= pickup) {
        newErrors.returnDate = 'Return date must be after pickup date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          pickupLocation: '',
          dropoffLocation: '',
          pickupDate: '',
          returnDate: '',
          fullName: '',
          phone: '',
          email: ''
        });
        setAddons({
          driver: false,
          insurance: false,
          gps: false,
          childSeat: false
        });
        setTermsAccepted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
        <p className="text-gray-600">Fill in the details below to reserve your vehicle</p>
      </div>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
          <Check className="w-5 h-5 text-emerald-600" />
          <div>
            <p className="font-semibold text-emerald-800">Booking Confirmed!</p>
            <p className="text-sm text-emerald-600">Your reservation has been successfully submitted.</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 space-y-8">

        {/* LOCATION & DATE */}
        <Section title="Rental Period" icon={<Calendar />}>
          <Input 
            label="Pickup Location" 
            icon={<MapPin />} 
            value={formData.pickupLocation}
            onChange={(value) => handleInputChange('pickupLocation', value)}
            error={errors.pickupLocation}
            placeholder="City, address, or airport"
          />
          <Input 
            label="Drop-off Location" 
            icon={<MapPin />} 
            value={formData.dropoffLocation}
            onChange={(value) => handleInputChange('dropoffLocation', value)}
            error={errors.dropoffLocation}
            placeholder="Same as pickup or different"
          />
          <Input 
            label="Pickup Date" 
            type="date" 
            value={formData.pickupDate}
            onChange={(value) => handleInputChange('pickupDate', value)}
            error={errors.pickupDate}
            min={new Date().toISOString().split('T')[0]}
          />
          <Input 
            label="Return Date" 
            type="date" 
            value={formData.returnDate}
            onChange={(value) => handleInputChange('returnDate', value)}
            error={errors.returnDate}
            min={formData.pickupDate || new Date().toISOString().split('T')[0]}
          />
        </Section>

        {/* CUSTOMER INFO */}
        <Section title="Customer Information" icon={<User />}>
          <Input 
            label="Full Name" 
            value={formData.fullName}
            onChange={(value) => handleInputChange('fullName', value)}
            error={errors.fullName}
            placeholder="Enter your full name"
          />
          <Input 
            label="Phone Number" 
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
            error={errors.phone}
            placeholder="+1 (555) 000-0000"
          />
          <Input 
            label="Email Address" 
            type="email" 
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            placeholder="your.email@example.com"
          />
        </Section>

        {/* ADDONS */}
        <Section title="Add-ons" icon={<Zap />}>
          <Addon 
            label="Driver Service" 
            price="$50/day" 
            checked={addons.driver}
            onChange={() => handleAddonChange('driver')}
            description="Professional driver service"
          />
          <Addon 
            label="Full Insurance" 
            price="$30/day" 
            checked={addons.insurance}
            onChange={() => handleAddonChange('insurance')}
            description="Complete protection package"
          />
          <Addon 
            label="GPS Navigation" 
            price="$10/day" 
            checked={addons.gps}
            onChange={() => handleAddonChange('gps')}
            description="Turn-by-turn navigation"
          />
          <Addon 
            label="Child Seat" 
            price="$15/day" 
            checked={addons.childSeat}
            onChange={() => handleAddonChange('childSeat')}
            description="Safety seat for children"
          />
        </Section>

        {/* PRICING */}
        <Section title="Pricing Details" icon={<CreditCard />}>
          <PriceRow label="Daily Rate" value={`$${baseRate}`} />
          <PriceRow label="Security Deposit" value={`$${deposit}`} />
          {addonTotal > 0 && <PriceRow label="Add-ons" value={`$${addonTotal}`} />}
          <div className="border-t pt-3 mt-3">
            <PriceRow label="Estimated Total" value={`$${total}`} highlight />
          </div>
        </Section>

        {/* TERMS */}
        <Section title="Rental Terms" icon={<Shield />}>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Free cancellation up to 24 hours before pickup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Minimum driver age: 21+ with valid license</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Unlimited mileage included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Late return fee: $50/hour after 30min grace period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Return with same fuel level</span>
              </li>
            </ul>
          </div>

          <label className="flex items-center gap-3 mt-4 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input 
              type="checkbox" 
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                if (errors.terms) setErrors(prev => ({ ...prev, terms: '' }));
              }}
              className="w-4 h-4 text-emerald-600 rounded"
            />
            <span className="text-sm">I agree to the rental terms and conditions</span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.terms}
            </p>
          )}
        </Section>

        {/* SUPPORT */}
        <Section title="Contact Support" icon={<Phone />}>
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <p className="text-sm text-gray-700 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">24/7 Support: 1-800-RENTAL</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <span className="text-emerald-600">✉</span>
                <span>support@rental.com</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <span className="text-emerald-600">💬</span>
                <span>Live chat available 24/7</span>
              </div>
            </p>
            <p className="text-xs text-emerald-600 mt-3">Average response time: &lt; 2 minutes</p>
          </div>
        </Section>

        {/* SUBMIT */}
        <div className="pt-6 border-t">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Confirm Booking - ${total}
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            By confirming, you agree to our terms and privacy policy
          </p>
        </div>
      </form>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Section({ title, icon, children }) {
  return (
    <div className="border rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Input({ label, icon, type = "text", value, onChange, error, placeholder, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-3 text-gray-400">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
            icon ? "pl-10" : ""
          } ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
          }`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function Addon({ label, price, checked, onChange, description }) {
  return (
    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
        />
        <div>
          <p className="font-medium text-gray-900">{label}</p>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <span className="text-emerald-600 font-semibold">{price}</span>
    </label>
  );
}

function PriceRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span className={`font-bold text-lg ${highlight ? "text-emerald-600" : "text-gray-900"}`}>
        {value}
      </span>
    </div>
  );
}