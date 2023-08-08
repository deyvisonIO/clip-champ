'use client'

import { useAtom } from "jotai"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

import { dateAtom, sortAtom } from "@/lib/store";
import { getDate } from "@/lib/getDate";

export function TopClipsSelect() {
  const [sort, setSort] = useAtom(sortAtom);
  const [date, setDate] = useAtom(dateAtom);
 
  function changeDate(value: string) {
    setSort(value);
    setDate(getDate(value));
  }


  return (
    <Select defaultValue={sort} onValueChange={changeDate}>
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
