import React from 'react';
import { GraduationCap, Users, Play, MessageSquare, Plus, TrendingUp } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Courses & Community</h1>
          <p className="mt-2 text-gray-600">Create and manage online courses with community features</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Course
        </button>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-500">Active Courses</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <Users className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2,847</div>
              <div className="text-sm text-gray-500">Total Students</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <div className="text-sm text-gray-500">Completion Rate</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1,293</div>
              <div className="text-sm text-gray-500">Community Posts</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">My Courses</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'React Mastery Course',
              description: 'Complete guide to modern React development',
              students: 1247,
              lessons: 24,
              duration: '8 hours',
              status: 'published',
              progress: 100
            },
            {
              title: 'JavaScript Fundamentals',
              description: 'Learn JavaScript from basics to advanced',
              students: 892,
              lessons: 18,
              duration: '6 hours',
              status: 'published',
              progress: 100
            },
            {
              title: 'Node.js Backend Development',
              description: 'Build scalable backend applications',
              students: 634,
              lessons: 32,
              duration: '12 hours',
              status: 'draft',
              progress: 75
            }
          ].map((course, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="flex items-center justify-center">
                  <Play className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    course.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{course.description}</p>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{course.students}</div>
                    <div>Students</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{course.lessons}</div>
                    <div>Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{course.duration}</div>
                    <div>Duration</div>
                  </div>
                </div>

                {course.status === 'draft' && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-x-2">
                  <button className="flex-1 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                    {course.status === 'published' ? 'Manage' : 'Continue'}
                  </button>
                  <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Features */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Community Activity */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Community Activity</h3>
          <div className="space-y-4">
            {[
              { user: 'Sarah Johnson', action: 'completed', course: 'React Mastery Course', time: '2 hours ago' },
              { user: 'Mike Chen', action: 'posted in', course: 'JavaScript Fundamentals', time: '4 hours ago' },
              { user: 'Emily Davis', action: 'started', course: 'Node.js Backend Development', time: '6 hours ago' },
              { user: 'Alex Rodriguez', action: 'asked a question in', course: 'React Mastery Course', time: '8 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-xs font-medium text-white">{activity.user.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.course}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Creation Tools */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Creation Tools</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <Play className="h-4 w-4 text-blue-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Video Upload & Hosting</div>
                <div className="text-xs text-gray-500">Upload and stream course videos</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-green-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Quiz Builder</div>
                <div className="text-xs text-gray-500">Create interactive quizzes</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-purple-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Discussion Forums</div>
                <div className="text-xs text-gray-500">Community discussions</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
                <Users className="h-4 w-4 text-orange-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Student Management</div>
                <div className="text-xs text-gray-500">Track student progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;