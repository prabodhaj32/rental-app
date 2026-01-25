import React, { useState } from "react"
import { X, MapPin, Phone, BarChartBig as ChartPie, Shield, CreditCard, Mic, Paperclip, Smile, Send, Zap, Calendar, RotateCcw, User, LayoutGrid, Car, ChevronLeft, ChevronRight, Expand, Star, Check, Clock, Fuel, Luggage, Snowflake, Users as UserIcon, Settings } from "lucide-react"

export default function RentalPopup({ selectedCar, onClose }) {
  const [showPricing, setShowPricing] = useState(false);
  const [showRentalPeriod, setShowRentalPeriod] = useState(false);
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);
  const [showAddons, setShowAddons] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white rounded-3xl w-full max-w-7xl max-h-[95vh] overflow-y-auto scrollbar-hide shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-[#1f2937]">Complete Your Rental</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5 text-[#6b7280]" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 1️⃣ Car Overview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Car Overview
                </h3>
                
                <div className="flex gap-6">
                  {/* Car Image */}
                  <div className="flex-1">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Car Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="font-bold text-lg text-[#1f2937]">{selectedCar.name}</h4>
                      <p className="text-sm text-[#6b7280]">Luxury Sports Car</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">Available</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{selectedCar.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2️⃣ Key Specifications */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-4">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-[#6b7280]" />
                    <span className="text-sm">{selectedCar.passengers} Seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-[#6b7280]" />
                    <span className="text-sm">{selectedCar.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-[#6b7280]" />
                    <span className="text-sm">Petrol</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Snowflake className="w-4 h-4 text-[#6b7280]" />
                    <span className="text-sm">AC Available</span>
                  </div>
                </div>
              </div>

              {/* 3️⃣ Shortcut Keys */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setShowPricing(true)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-500 transition flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">Pricing Details</p>
                      <p className="text-xs text-gray-500">View pricing & calculate total</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setShowRentalPeriod(true)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-500 transition flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">Rental Period</p>
                      <p className="text-xs text-gray-500">Set pickup & return dates</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setShowCustomerInfo(true)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-500 transition flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">Customer Info</p>
                      <p className="text-xs text-gray-500">Enter your details</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setShowAddons(true)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-500 transition flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">Add-ons</p>
                      <p className="text-xs text-gray-500">Driver, insurance & more</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setShowTerms(true)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-500 transition flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">Rental Terms</p>
                      <p className="text-xs text-gray-500">Terms & conditions</p>
                    </div>
                  </button>

                  <button className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-500 transition flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">Contact Support</p>
                      <p className="text-xs text-gray-500">Get help 24/7</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - AI Assistant */}
            <div className="space-y-6">
              {/* AI Assistant Panel */}
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-5 shadow-sm border border-gray-200/20">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2937]">AI Assistant</h3>
                    <p className="text-sm text-[#9ca3af]">How can I help you?</p>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <X className="w-4 h-4 text-[#6b7280]" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <QuickAction 
                    icon={<Phone className="w-4 h-4" />} 
                    title="Book a rent" 
                    subtitle="5 min"
                    iconBg="bg-[#e8f5e9]"
                    iconColor="text-emerald-600"
                  />
                  <QuickAction 
                    icon={<ChartPie className="w-4 h-4" />} 
                    title="Analysis" 
                    subtitle="Damages"
                    iconBg="bg-[#1f2937]"
                    iconColor="text-white"
                  />
                  <QuickAction 
                    icon={<Shield className="w-4 h-4" />} 
                    title="Insurance" 
                    subtitle="Pick a Plan"
                    iconBg="bg-emerald-600"
                    iconColor="text-white"
                  />
                  <QuickAction 
                    icon={<CreditCard className="w-4 h-4" />} 
                    title="Payment" 
                    subtitle="Calculate"
                    iconBg="bg-[#e8f5e9]"
                    iconColor="text-emerald-600"
                  />
                </div>

                <div className="mb-4">
                  <p className="text-sm text-[#1f2937] mb-3">Arrange to rent this car for 8am<span className="animate-pulse">|</span></p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 bg-[#f3f4f6] rounded-xl flex items-center justify-center">
                    <Mic className="w-4 h-4 text-[#6b7280]" />
                  </button>
                  <button className="w-10 h-10 bg-[#f3f4f6] rounded-xl flex items-center justify-center">
                    <Paperclip className="w-4 h-4 text-[#6b7280]" />
                  </button>
                  <button className="w-10 h-10 bg-[#f3f4f6] rounded-xl flex items-center justify-center">
                    <Smile className="w-4 h-4 text-[#6b7280]" />
                  </button>
                  <button className="flex-1 bg-emerald-600 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-emerald-700 transition">
                    Send
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 8️⃣ Actions */}
          <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
            <button 
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button className="flex-1 px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition">
              Quick Book - ${selectedCar.price.toLocaleString()}/day
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modals */}
      {showPricing && (
        <PricingModal 
          selectedCar={selectedCar} 
          onClose={() => setShowPricing(false)} 
        />
      )}

      {showRentalPeriod && (
        <RentalPeriodModal 
          onClose={() => setShowRentalPeriod(false)} 
        />
      )}

      {showCustomerInfo && (
        <CustomerInfoModal 
          onClose={() => setShowCustomerInfo(false)} 
        />
      )}

      {showAddons && (
        <AddonsModal 
          onClose={() => setShowAddons(false)} 
        />
      )}

      {showTerms && (
        <TermsModal 
          onClose={() => setShowTerms(false)} 
        />
      )}
    </div>
    </>
  )
}

// QuickAction Helper Component
function QuickAction({ 
  icon, 
  title, 
  subtitle, 
  iconBg, 
  iconColor 
}) {
  return (
    <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 cursor-pointer">
      <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-[#1f2937]">{title}</p>
        <p className="text-xs text-[#9ca3af]">{subtitle}</p>
      </div>
    </div>
  )
}

// Modal Components
function PricingModal({ selectedCar, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#1f2937]">Pricing Details</h3>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Daily Rate</span>
            <span className="font-bold">${selectedCar.price.toLocaleString()}/day</span>
          </div>
          <div className="flex justify-between">
            <span>Security Deposit</span>
            <span className="font-bold">$200</span>
          </div>
          <div className="flex justify-between">
            <span>Driver Required</span>
            <span className="font-bold">$50</span>
          </div>
          <div className="flex justify-between">
            <span>Insurance</span>
            <span className="font-bold">$30</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between">
              <span className="font-bold">Total (1 day)</span>
              <span className="font-bold text-emerald-600">${(selectedCar.price + 200 + 50 + 30).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RentalPeriodModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#1f2937]">Rental Period</h3>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Pickup Date</label>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Return Date</label>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Pickup Location</label>
            <input type="text" placeholder="Enter location" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomerInfoModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#1f2937]">Customer Information</h3>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" placeholder="your.email@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

function AddonsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#1f2937]">Optional Add-ons</h3>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
            <span>Additional Driver Required (+$50/day)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
            <span>Full Insurance Coverage (+$30/day)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
            <span>GPS Navigation (+$10/day)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
            <span>Child Seat (+$15/day)</span>
          </label>
        </div>
      </div>
    </div>
  )
}

function TermsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#1f2937]">Rental Terms</h3>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <p>Premium luxury vehicle with full insurance coverage and 24/7 roadside assistance.</p>
          <p><strong>Cancellation:</strong> Free cancellation up to 24 hours before pickup.</p>
          <p><strong>Driver Requirements:</strong> Valid license + 2 years experience.</p>
          <p><strong>Fuel Policy:</strong> Return with same fuel level.</p>
          <p><strong>Mileage:</strong> Unlimited mileage included.</p>
        </div>
      </div>
    </div>
  )
}
