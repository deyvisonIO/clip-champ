'use client'

import * as Select from '@radix-ui/react-select'

export function TopClipsSelect() {
   return (
    <Select.Root>
      <Select.Trigger >
        <Select.Value placeholder="Top" />
        <Select.Icon >

        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content >
          <Select.Viewport >
              <Select.Group>
                <Select.Label >Top</Select.Label>
              <Select.Item value="day">
                <Select.ItemText>
                24 hours
                </Select.ItemText>
              </Select.Item>
              <Select.Item value="week">
                <Select.ItemText>
                7 days
                </Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
   )
}
