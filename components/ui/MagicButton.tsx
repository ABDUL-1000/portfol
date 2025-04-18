import React from 'react'
import { Button } from './button'

const MagicButton = ({title,  position, icon, handleClick, otherClases}:{
    title: string,
    icon?: React.ReactNode;
    position:string,
    handleClick?: () => void,
    otherClases?: string
}) => {
  return (
    <div>
      <Button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-4 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClases}`}>
    {position === "left" }
{title}
{position === "right"}
  </span>
</Button>
    </div>
  )
}

export default MagicButton
