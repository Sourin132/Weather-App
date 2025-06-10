import React from 'react'
import { Search, MapPin, Clock, Thermometer, Cloud } from 'lucide-react';

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Enter location name..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
              />
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Data Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center text-white">
              <MapPin className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">Sample Location</h2>
            </div>
            <p className="text-blue-100 mt-1">Sample Country</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Thermometer className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="text-lg font-semibold text-gray-900">24°C</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weather</p>
                  <p className="text-lg font-semibold text-gray-900">Partly Cloudy</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="h-6 w-6 text-green-600 font-bold flex items-center justify-center text-sm">%</div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-lg font-semibold text-gray-900">65%</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <div className="h-6 w-6 text-purple-600 font-bold flex items-center justify-center text-xs">W</div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wind Speed</p>
                  <p className="text-lg font-semibold text-gray-900">12 km/h</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:col-span-2 lg:col-span-1">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="text-lg font-semibold text-gray-900">2:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Main
