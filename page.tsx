import { Mail, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-white dark:ring-gray-800">
              <img src="/images/profile.jpg" alt="Sudeesh Acharya" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Sudeesh Acharya</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Welcome to my personal space</p>
          </div>

          {/* Contact Information Card */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Get In Touch</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:contact@sudeeshacharya.com.np"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      contact@sudeeshacharya.com.np
                    </a>
                  </div>
                </div>

                <Separator />

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a
                      href="tel:+9779817550013"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +977 9817550013
                    </a>
                  </div>
                </div>

                <Separator />

                {/* Instagram */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Instagram</p>
                    <a
                      href="https://www.instagram.com/sudeeshacharya_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    >
                      @sudeeshacharya_
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1" size="lg">
                  <a href="mailto:contact@sudeeshacharya.com.np">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1" size="lg">
                  <a href="tel:+9779817550013">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {"Let's connect and create something amazing together!"}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Sudeesh Acharya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
