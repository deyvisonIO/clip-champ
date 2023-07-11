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
        <Select.Content className='overflow-hidden rounded-md top-10 bg-neutral-800 p-0 m-0' >
          <Select.Viewport className='p-2 flex flex-col align-items-center w-100'>
              <Select.Item value="day" className='data-[highlighted]:bg-neutral-500'>
                <Select.ItemText>
                  24 hours
                </Select.ItemText>
              </Select.Item>
              <Select.Item value="week" className='data-[highlighted]:bg-neutral-500'>
                <Select.ItemText>
                  7 days
                </Select.ItemText>
              </Select.Item>
              <Select.Item value="month" className='data-[highlighted]:bg-neutral-500'>
                <Select.ItemText>
                  Month 
                </Select.ItemText>
              </Select.Item>
              <Select.Item value="all" className='data-[highlighted]:bg-neutral-500'>
                <Select.ItemText>
                  All 
                </Select.ItemText>
              </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
   )
}
