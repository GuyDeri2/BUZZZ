"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Users, ShoppingCart, MousePointer, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

const visitData = [
  { name: "Mon", visits: 420 },
  { name: "Tue", visits: 380 },
  { name: "Wed", visits: 510 },
  { name: "Thu", visits: 470 },
  { name: "Fri", visits: 590 },
  { name: "Sat", visits: 620 },
  { name: "Sun", visits: 550 },
]

const conversionData = [
  { name: "Mon", rate: 2.4 },
  { name: "Tue", rate: 2.1 },
  { name: "Wed", rate: 3.2 },
  { name: "Thu", rate: 2.8 },
  { name: "Fri", rate: 3.5 },
  { name: "Sat", rate: 3.9 },
  { name: "Sun", rate: 3.3 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,540</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              <span>12% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Product Clicks</CardTitle>
            <MousePointer className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,875</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              <span>8% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Purchases</CardTitle>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">432</div>
            <div className="flex items-center text-xs text-red-500 mt-1">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              <span>3% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              <span>0.5% from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="traffic">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Visits</CardTitle>
              <CardDescription>Daily visits to your store over the past week</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visits" fill="#FFD100" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Instagram</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">42%</span>
                      <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Facebook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">28%</span>
                      <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>YouTube</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">18%</span>
                      <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-red-500" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span>Other</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">12%</span>
                      <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-gray-500" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
                <CardDescription>Age and gender of your visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Age Groups</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">18-24</span>
                        <div className="w-full max-w-[200px] h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "35%" }}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">25-34</span>
                        <div className="w-full max-w-[200px] h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "42%" }}></div>
                        </div>
                        <span className="text-sm font-medium">42%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">35-44</span>
                        <div className="w-full max-w-[200px] h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "15%" }}></div>
                        </div>
                        <span className="text-sm font-medium">15%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">45+</span>
                        <div className="w-full max-w-[200px] h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "8%" }}></div>
                        </div>
                        <span className="text-sm font-medium">8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate</CardTitle>
              <CardDescription>Daily conversion rate over the past week</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#FFD100"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Your best performing products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-muted"></div>
                      <span>Premium Course</span>
                    </div>
                    <div>
                      <span className="font-medium">245 clicks</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-muted"></div>
                      <span>Exclusive E-Book</span>
                    </div>
                    <div>
                      <span className="font-medium">187 clicks</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-muted"></div>
                      <span>Membership</span>
                    </div>
                    <div>
                      <span className="font-medium">124 clicks</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Visitor journey through your store</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-xs font-semibold inline-block">Store Visits</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block">3,540</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                      <div
                        style={{ width: "100%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-xs font-semibold inline-block">Product Views</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block">2,156</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-xs font-semibold inline-block">Add to Cart</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block">865</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                      <div
                        style={{ width: "24%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-xs font-semibold inline-block">Purchases</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block">432</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                      <div
                        style={{ width: "12%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

