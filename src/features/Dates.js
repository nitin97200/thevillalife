import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"
import { Box } from "@material-ui/core"

export default function Example() {
  const [dates, setDates] = useState("")

  return (
    <Box className="datepeaker">
      <DatePicker
        value={dates}
       style={{height:"54px",position:"absolute",bottom:"75px"}}
        onChange={setDates}
        multiple
        numberOfMonths={2}
        placeholder="Add Dates"
      />
    </Box>
  )
}


