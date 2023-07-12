'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function TopClipsSelect() {
   return (
    <Select defaultValue="day" >
      <SelectTrigger className="w-30 gap-1">
        Top
        <SelectValue />
      </SelectTrigger>
        <SelectContent >
              <SelectItem value="day" >
                  24 hours
              </SelectItem>
              <SelectItem value="week" >
                  7 days
              </SelectItem>
              <SelectItem value="month" >
                  Month 
              </SelectItem>
              <SelectItem value="all" >
                  All 
              </SelectItem>
        </SelectContent>
    </Select>
   )
}
