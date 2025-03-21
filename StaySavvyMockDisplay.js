
import React from 'react';

export default function StaySavvyMockDisplay() {
  return (
    <div className="grid grid-cols-7 gap-4 p-6">

      {/* Welcome Screen / Property Branding */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">🏡 Welcome to Blue Oak Retreat</h2>
        <div className="bg-gray-100 p-3 rounded-xl space-y-2">
          <div className="bg-white rounded-lg shadow p-2 text-center">[Property Logo]</div>
          <div className="bg-white rounded-lg shadow p-2 text-center">🎥 Welcome Video</div>
          <p className="text-sm text-gray-700">"Hi! We're so glad you’re here. Tap below to plan your perfect stay."</p>
          <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">Explore the Area</button>
        </div>
      </div>

      {/* Main Menu (Guest Home Screen) */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">Plan Your Stay</h2>
        <div className="bg-gray-100 p-3 rounded-xl space-y-2">
          <button className="w-full bg-white p-3 rounded-lg shadow text-left">🍽️ Private Chef</button>
          <button className="w-full bg-white p-3 rounded-lg shadow text-left">🧖 Massage & Spa</button>
          <button className="w-full bg-white p-3 rounded-lg shadow text-left">🐎 Horseback Riding</button>
          <button className="w-full bg-white p-3 rounded-lg shadow text-left">🗺️ Local Guides & Events</button>
        </div>
      </div>

      {/* Service Category View */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">🍽️ Private Chefs</h2>
        <div className="text-sm text-gray-500 mb-2">Sort by: <span className="font-semibold text-black">⭐ Rating</span></div>
        <div className="bg-gray-100 p-3 rounded-xl space-y-2">
          <div className="bg-white p-3 rounded-lg shadow">
            👨‍🍳 Chef Miguel – ★ 4.8<br />“Farm-to-table Mediterranean dining”
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            👩‍🍳 Chef Lea – ★ 4.6<br />“Vegan-friendly Southern comfort dishes”
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">Book Chef Miguel</h2>
        <div className="bg-gray-100 p-3 rounded-xl space-y-3">
          <label className="block text-sm font-medium">📅 Select Date</label>
          <input type="date" className="w-full p-2 rounded border" />
          <label className="block text-sm font-medium">⏰ Select Time</label>
          <input type="time" className="w-full p-2 rounded border" />
          <label className="block text-sm font-medium">👤 Number of Guests</label>
          <input type="number" className="w-full p-2 rounded border" min="1" />
          <label className="block text-sm font-medium">📝 Notes (optional)</label>
          <textarea className="w-full p-2 rounded border" rows="2" placeholder="e.g. gluten-free options..." />
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg shadow">Confirm Booking</button>
        </div>
      </div>

      {/* Vendor Profile View */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">Vendor Profile – Wild Trails Ranch</h2>
        <div className="bg-gray-100 p-3 rounded-xl space-y-3">
          <div className="bg-white p-3 rounded-lg shadow">
            🐴 Horseback riding through scenic trails
            <div className="text-sm text-gray-500">Open daily 9am–5pm</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            ⭐ 4.9 (32 reviews)
            <div className="text-sm text-gray-500">Last booking: 2 days ago</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            💬 "Unforgettable! Felt like a movie."
            <div className="text-sm text-gray-500">– Guest Review</div>
          </div>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg shadow">Book This Vendor</button>
        </div>
      </div>

      {/* Booking Confirmation + Status Tracking */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">📋 Booking Confirmed!</h2>
        <div className="bg-gray-100 p-3 rounded-xl space-y-2">
          <div className="bg-white p-3 rounded-lg shadow">
            🧑‍🍳 <strong>Chef Miguel</strong>
            <div className="text-sm text-gray-500">March 30, 6:00 PM • 4 Guests</div>
          </div>
          <div className="text-sm text-green-700 font-medium">✅ Status: Confirmed</div>
          <div className="text-xs text-gray-500">Need to make changes? Contact your host or vendor directly.</div>
        </div>
      </div>

      {/* Rate Your Experience */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border max-w-xs mx-auto">
        <h2 className="text-xl font-bold mb-2">Rate Your Experience</h2>
        <div className="bg-gray-100 p-3 rounded-xl space-y-2">
          <p className="text-sm">🧑‍🍳 <strong>Chef Miguel – March 30</strong></p>
          <div className="flex space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <textarea className="w-full p-2 rounded border text-sm" rows="3" placeholder="Tell us how it went..." />
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg shadow">Submit Review</button>
        </div>
      </div>

    </div>
  );
}
