
import { LableInput } from "./propsLogic"
import { Tooltip } from "./tooltip/tooltip"

export const Input = ({data}: LableInput) => {
  return(
    <>
      <label htmlFor={data.info}>{data.value}<Tooltip text={data.title}/></label>
      <input type={data.type} id={data.info} name={data.info} />
    </>
  )
}