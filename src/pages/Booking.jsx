import { useState } from "react";
import {
  MapPinned,
  Navigation,
  CalendarRange,
  Clock,
  UserCircle,
  Mail,
  Smartphone,
  IdCard,
  FileText,
  Package,
  UserRound,
  ShieldCheck,
  Map,
  Baby,
  Receipt,
  CircleDollarSign,
  Shield,
  Headphones,
  MailPlus,
  MessageCircle,
  CircleCheck,
  CircleAlert,
  Loader2,
  ChevronDown,
  Check,
  ThumbsUp,
} from "lucide-react";

export default function BookingForm() {
  // Form state – extended model
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
    fullName: "",
    phone: "",
    email: "",
    licenseNumber: "",
    specialRequests: "",
  });

  const [addons, setAddons] = useState({
    driver: false,
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Pricing
  const baseRate = 150;
  const deposit = 200;
  const addonPrices = {
    driver: 50,
    insurance: 30,
    gps: 10,
    childSeat: 15,
  };

  const addonTotal = Object.entries(addons).reduce(
    (total, [key, value]) => total + (value ? addonPrices[key] : 0),
    0
  );
  const total = baseRate + deposit + addonTotal;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleAddonChange = (addon) => {
    setAddons((prev) => ({ ...prev, [addon]: !prev[addon] }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pickupLocation) newErrors.pickupLocation = "Pickup location is required";
    if (!formData.dropoffLocation) newErrors.dropoffLocation = "Drop-off location is required";
    if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
    if (!formData.returnDate) newErrors.returnDate = "Return date is required";
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.licenseNumber) newErrors.licenseNumber = "Driver's license number is required";
    if (!termsAccepted) newErrors.terms = "You must accept the rental terms";

    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate);
      const ret = new Date(formData.returnDate);
      if (ret <= pickup) newErrors.returnDate = "Return date must be after pickup date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          pickupLocation: "",
          dropoffLocation: "",
          pickupDate: "",
          returnDate: "",
          pickupTime: "",
          returnTime: "",
          fullName: "",
          phone: "",
          email: "",
          licenseNumber: "",
          specialRequests: "",
        });
        setAddons({ driver: false, insurance: false, gps: false, childSeat: false });
        setTermsAccepted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Modern Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-700">Quick & Easy Booking</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Reserve Your Vehicle
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your booking in just a few steps. No hidden fees, instant confirmation.
          </p>
        </header>

        {submitSuccess && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-emerald-50 border border-emerald-200/80 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="p-2 bg-emerald-100 rounded-xl shrink-0">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-semibold text-emerald-900">Booking confirmed</p>
              <p className="text-sm text-emerald-700 mt-0.5">
                Your reservation has been submitted. We’ll send a confirmation to your email.
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
        >
          <div className="p-6 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-8">
            {/* Left Column: Steps 1 & 2 */}
            <div className="space-y-8">
              {/* Step 1 - Enhanced */}
              <Section
                title="Location & rental period"
                icon={<CalendarRange className="w-5 h-5" />}
                step="1"
              >
                <div className="space-y-4">
                  <Input
                    label="Pickup location"
                    icon={<MapPinned className="w-4 h-4" />}
                    value={formData.pickupLocation}
                    onChange={(v) => handleInputChange("pickupLocation", v)}
                    error={errors.pickupLocation}
                    placeholder="City, address, or airport"
                  />
                  <Input
                    label="Drop-off location"
                    icon={<Navigation className="w-4 h-4" />}
                    value={formData.dropoffLocation}
                    onChange={(v) => handleInputChange("dropoffLocation", v)}
                    error={errors.dropoffLocation}
                    placeholder="Same as pickup or different address"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Pickup date"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(v) => handleInputChange("pickupDate", v)}
                      error={errors.pickupDate}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <Input
                      label="Return date"
                      type="date"
                      value={formData.returnDate}
                      onChange={(v) => handleInputChange("returnDate", v)}
                      error={errors.returnDate}
                      min={formData.pickupDate || new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Pickup time"
                      type="time"
                      icon={<Clock className="w-4 h-4" />}
                      value={formData.pickupTime}
                      onChange={(v) => handleInputChange("pickupTime", v)}
                      placeholder="—"
                    />
                    <Input
                      label="Return time"
                      type="time"
                      icon={<Clock className="w-4 h-4" />}
                      value={formData.returnTime}
                      onChange={(v) => handleInputChange("returnTime", v)}
                      placeholder="—"
                    />
                  </div>
                </div>
              </Section>

              {/* Step 2 - Enhanced */}
              <Section
                title="Your details"
                icon={<UserCircle className="w-5 h-5" />}
                step="2"
              >
                <div className="space-y-4">
                  <Input
                    label="Full name"
                    icon={<UserCircle className="w-4 h-4" />}
                    value={formData.fullName}
                    onChange={(v) => handleInputChange("fullName", v)}
                    error={errors.fullName}
                    placeholder="As on your license"
                  />
                  <Input
                    label="Email"
                    type="email"
                    icon={<Mail className="w-4 h-4" />}
                    value={formData.email}
                    onChange={(v) => handleInputChange("email", v)}
                    error={errors.email}
                    placeholder="your@email.com"
                  />
                  <Input
                    label="Phone"
                    icon={<Smartphone className="w-4 h-4" />}
                    value={formData.phone}
                    onChange={(v) => handleInputChange("phone", v)}
                    error={errors.phone}
                    placeholder="+1 (555) 000-0000"
                  />
                  <Input
                    label="Driver's license number"
                    icon={<IdCard className="w-4 h-4" />}
                    value={formData.licenseNumber}
                    onChange={(v) => handleInputChange("licenseNumber", v)}
                    error={errors.licenseNumber}
                    placeholder="License number"
                  />
                  <Textarea
                    label="Special requests (optional)"
                    icon={<FileText className="w-4 h-4" />}
                    value={formData.specialRequests}
                    onChange={(v) => handleInputChange("specialRequests", v)}
                    placeholder="Access needs, infant seat, one-way trip, etc."
                    rows={3}
                  />
                </div>
              </Section>
            </div>

            {/* Right Column: Enhanced Dropdowns */}
            <div className="space-y-6">
              {/* Add-ons - Static Section */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      <Package className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-900">Add-ons & extras</span>
                    {Object.values(addons).filter(Boolean).length > 0 && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {Object.values(addons).filter(Boolean).length} selected
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="grid grid-cols-1 gap-3">
                    <Addon
                      label="Professional Driver"
                      price="$50/day"
                      checked={addons.driver}
                      onChange={() => handleAddonChange("driver")}
                      description="Experienced chauffeur service"
                      icon={<UserRound className="w-5 h-5" />}
                    />
                    <Addon
                      label="Premium Insurance"
                      price="$30/day"
                      checked={addons.insurance}
                      onChange={() => handleAddonChange("insurance")}
                      description="Complete coverage protection"
                      icon={<ShieldCheck className="w-5 h-5" />}
                    />
                    <Addon
                      label="GPS Navigation"
                      price="$10/day"
                      checked={addons.gps}
                      onChange={() => handleAddonChange("gps")}
                      description="Turn-by-turn navigation system"
                      icon={<Map className="w-5 h-5" />}
                    />
                    <Addon
                      label="Child Seat"
                      price="$15/day"
                      checked={addons.childSeat}
                      onChange={() => handleAddonChange("childSeat")}
                      description="Safety seat for children"
                      icon={<Baby className="w-5 h-5" />}
                    />
                  </div>
                </div>
              </div>

              {/* Pricing - Static Section */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-900">Pricing details</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Est. ${total}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="space-y-3">
                      <PriceRow label="Daily rate" value={`$${baseRate}`} icon={<CircleDollarSign className="w-4 h-4 text-green-600" />} />
                      <PriceRow label="Security deposit" value={`$${deposit}`} icon={<Shield className="w-4 h-4 text-green-600" />} />
                      {addonTotal > 0 && (
                        <PriceRow label="Add-ons" value={`$${addonTotal}`} icon={<Package className="w-4 h-4 text-green-600" />} />
                      )}
                      <div className="border-t border-green-200 pt-3 mt-3">
                        <PriceRow
                          label="Total amount"
                          value={`$${total}`}
                          highlight
                          icon={<Receipt className="w-5 h-5 text-emerald-600" />}
                        />
                      </div>
                    </div>
                    
                    {/* Special offer */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-300">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">!</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-orange-800">Limited Time Offer</p>
                          <p className="text-xs text-orange-600">10% off weekly rentals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms - Enhanced */}
              <DropdownSection
                title="Terms & conditions"
                icon={<ShieldCheck className="w-5 h-5" />}
                badge={termsAccepted ? "Accepted" : null}
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-blue-800">Your Protection</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {[
                      "Free cancellation up to 24 hours before pickup",
                      "Driver must be 21+ with a valid license",
                      "Unlimited mileage included",
                      "Late return: $50/hour after 30 min grace period",
                      "Return vehicle with the same fuel level",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CircleCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <label className="mt-4 flex items-start gap-3 p-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => {
                      setTermsAccepted(e.target.checked);
                      if (errors.terms) setErrors((p) => ({ ...p, terms: "" }));
                    }}
                    className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900">I agree to the rental terms and conditions</span>
                    <p className="text-xs text-gray-500 mt-1">By checking this box, you accept our terms of service</p>
                  </div>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-sm flex items-center gap-1.5 mt-2">
                    <CircleAlert className="w-4 h-4 shrink-0" />
                    {errors.terms}
                  </p>
                )}
              </DropdownSection>

              {/* Need help - Enhanced */}
              <DropdownSection
                title="Need help?"
                icon={<Headphones className="w-5 h-5" />}
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">24/7 Support</p>
                      <p className="text-blue-100">We're here to help anytime</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href="tel:1800736825" className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 text-center">
                      <Smartphone className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">1-800-RENTAL</p>
                    </a>
                    <a href="mailto:support@rental.com" className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 text-center">
                      <MailPlus className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">Email Us</p>
                    </a>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">Live Chat</p>
                      <p className="text-xs text-blue-100">Online Now</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">&lt; 2 min response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs">98% satisfaction</span>
                    </div>
                  </div>
                </div>
              </DropdownSection>
            </div>
          </div>

          {/* Enhanced Submit Button */}
          <div className="px-6 sm:px-8 lg:px-10 py-6 bg-gradient-to-r from-green-600 to-emerald-600 border-t border-green-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <p className="text-sm opacity-90">Total Amount</p>
                <p className="text-2xl font-bold">${total}</p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-green-600 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ======= Enhanced Helper Components ======= */

function Section({ title, icon, step, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {step}
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-100 rounded-lg text-green-600">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}

function Input({ label, icon, type = "text", value, onChange, error, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
            icon ? "pl-10" : ""
          } ${
            error 
              ? "border-red-500 focus:ring-red-500" 
              : "border-gray-300 hover:border-gray-400"
          }`}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <CircleAlert className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function Textarea({ label, icon, value, onChange, placeholder, rows = 3 }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3 text-gray-400">
            {icon}
          </div>
        )}
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none ${
            icon ? "pl-10" : ""
          }`}
        />
      </div>
    </div>
  );
}

function DropdownSection({ title, icon, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg text-green-600">
            {icon}
          </div>
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              {badge}
            </span>
          )}
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {open && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}

function Addon({ label, price, description, checked, onChange, icon }) {
  return (
    <label className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
      checked
        ? "border-green-500 bg-green-50 shadow-md"
        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
    }`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
      />
      <div className={`p-2 rounded-lg ${
        checked ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600"
      }`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className={`font-bold text-lg ${
        checked ? "text-green-600" : "text-gray-700"
      }`}>
        {price}
      </span>
    </label>
  );
}

function PriceRow({ label, value, highlight = false, icon }) {
  return (
    <div className={`flex justify-between items-center py-2 ${
      highlight ? "font-bold text-lg" : ""
    }`}>
      <div className="flex items-center gap-2">
        {icon && <div className="w-4 h-4">{icon}</div>}
        <span className={highlight ? "text-gray-900" : "text-gray-600"}>
          {label}
        </span>
      </div>
      <span className={`font-bold ${
        highlight 
          ? "text-green-600 text-xl" 
          : "text-gray-900"
      }`}>
        {value}
      </span>
    </div>
  );
}
