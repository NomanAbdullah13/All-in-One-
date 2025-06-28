import React from 'react';
import { MessageCircle, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">Get in touch with our support team</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Send us a message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>Feature Request</option>
                <option>Bug Report</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Please describe your issue or question in detail..."
              />
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Support Hours */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-x-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <Clock className="h-5 w-5 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Support Hours</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Email Support</div>
                  <div className="text-sm text-gray-500">support@platform.com</div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Phone Support</div>
                  <div className="text-sm text-gray-500">1-800-PLATFORM</div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Live Chat</div>
                  <div className="text-sm text-gray-500">Available during business hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Response Times */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Times</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">General Inquiries</div>
                  <div className="text-sm text-gray-500">Within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Technical Support</div>
                  <div className="text-sm text-gray-500">Within 2-4 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Critical Issues</div>
                  <div className="text-sm text-gray-500">Within 1 hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;