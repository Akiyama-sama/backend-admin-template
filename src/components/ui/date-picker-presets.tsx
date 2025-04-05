"use client"

import * as React from "react"
import { format, isValid } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DatePickerWithPresetsProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: Date | string
  onDateChange?: (date: Date) => void
  placeholderText?: string
}

const DatePickerWithPresets = React.forwardRef<HTMLDivElement, DatePickerWithPresetsProps>(
  ({ className, date, onDateChange, placeholderText = "选择一个日期", ...props }, ref) => {
    // 确保日期有效
    const parseDate = (dateValue: Date | string | undefined): Date | undefined => {
      if (!dateValue) return undefined;
      
      try {
        const parsedDate = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
        return isValid(parsedDate) ? parsedDate : undefined;
      } catch (error) {
        console.error("日期解析错误:", error);
        return undefined;
      }
    };
    
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(parseDate(date));

    // 当props中的date变化时更新状态
    React.useEffect(() => {
      const validDate = parseDate(date);
      setSelectedDate(validDate);
    }, [date]);

    const handleDateChange = (newDate: Date | undefined) => {
      setSelectedDate(newDate);
      if (newDate && isValid(newDate) && onDateChange) {
        onDateChange(newDate);
      }
    };

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !selectedDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate && isValid(selectedDate) 
                ? format(selectedDate, "yyyy-MM-dd") 
                : <span>{placeholderText}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="flex w-auto ">
            <div className="rounded-md border">
              <Calendar mode="single" selected={selectedDate} onSelect={handleDateChange} />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)   

DatePickerWithPresets.displayName = "DatePickerWithPresets"

export { DatePickerWithPresets }
